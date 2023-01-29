<template>
    <div class = "login">
        <h1>Acceco a la tienda</h1>
        <form>
            <div class = login_child>
                <div class = "email">
                    <label for = "email">E_mail:</label>
                    <input id = "email" type = "email" name = "email" required  placeholder = "email@email.com">
                </div>
                <div class = "password">
                    <label for = "password">Password:</label>
                    <input id = "password" type = "password" name="password" required placeholder = "*********">
                </div>

                <button  class="btn btn-primary">Entrar</button>

            </div>
        </form>
    </div>
</template>

<style scoped>
.login {
    width: 30%;
    margin: 30px 200px 0px 200px;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color:  rgb(232, 119, 119);
    color: white;
}

.login_child {
    margin: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}
.email {
    padding: 10px;
}

.password {
    padding: 10px;
}

.btn {
    background-color:  rgb(232, 88, 88);
    border-color: rgb(232, 88, 88);;
}
</style>