from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow

# para roda a api colocar no cmd flask --app app run

app = Flask(__name__)

# Configuração do banco de dados
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "mysql+pymysql://root@localhost/flask_react_crud"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Inicialização do banco de dados
db = SQLAlchemy(app)

# Inicialização do Marshmallow para serialização
ma = Marshmallow(app)


# Definição do modelo de usuário
class Usuario(db.Model):
    __tablename__ = "usuarios"
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    email = db.Column(db.String(100))
    data = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, nome, email):
        self.nome = nome
        self.email = email


# Definição do esquema de serialização do usuário
class UsuarioSchema(ma.Schema):
    class Meta:
        fields = ("id", "nome", "email", "data")


# Instância do esquema de serialização
usuario_schema = UsuarioSchema()
usuarios_schema = UsuarioSchema(many=True)


# Rota inicial para teste
@app.route("/")
def hello_world():
    return "<p>Olá, Mundo!</p>"


# Rota para listar todos os usuários
@app.route("/listadeusuarios", methods=["GET"])
def listadeusuarios():
    all_usuarios = Usuario.query.all()
    results = usuarios_schema.dump(all_usuarios)
    return jsonify(results)


# Rota para obter os detalhes de um usuário específico
@app.route("/detalhedousuario/<id>", methods=["GET"])
def detalhedousuario(id):
    usuario = Usuario.query.get(id)
    return usuario_schema.jsonify(usuario)


# Rota para atualizar um usuário
@app.route("/atualizarusuario/<id>", methods=["PUT"])
def atualizarusuario(id):
    usuario = Usuario.query.get(id)

    nome = request.json["nome"]
    email = request.json["email"]

    usuario.nome = nome
    usuario.email = email

    db.session.commit()
    return usuario_schema.jsonify(usuario)


# Rota para deletar um usuário
@app.route("/deletarusuario/<id>", methods=["DELETE"])
def deletarusuario(id):
    usuario = Usuario.query.get(id)
    db.session.delete(usuario)
    db.session.commit()
    return usuario_schema.jsonify(usuario)


# Rota para adicionar um novo usuário
@app.route("/usuarioadd", methods=["POST"])
def usuarioadd():
    nome = request.json["nome"]
    email = request.json["email"]

    usuario = Usuario(nome, email)
    db.session.add(usuario)
    db.session.commit()

    return usuario_schema.jsonify(usuario)


# Execução da aplicação Flask
if __name__ == "__main__":
    app.run()
