from app import app, db
from app.models.tables import Users
from flask import make_response, jsonify, request

@app.route("/login")
def users():
    users = db.session.execute(db.select(Users.username))
    return users
    # response.headers.add('Access-Control-Allow-Origin', "*")

    # return response

@app.route("/cadastro", methods=["GET", "POST"])
def cadastro():
    user = {
        "user" : request.json["username"],
        "password" : request.json["password"]
    }
    try:
        data = Users(
            username=user["user"],
            password=user["password"]
        )
        db.session.add(data)
        db.session.commit()
    except Exception as erro:
        print(erro)
    return make_response(
        jsonify(user)
    )


    
