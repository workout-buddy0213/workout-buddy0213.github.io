* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}

/* Navigation bar */
.navbar {
    width: 100%;
    background-color: #00FFCC;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: none;
}
.navbar a {
    color: #000;
    padding: 14px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}
.navbar a:hover {
    background-color: #ddd;
    color: black;
}

/* Vertical menu */
.vertical-menu {
    display: none;
    position: absolute;
    top: 50px;
    background-color: #00FFCC;
    width: 200px;
    left: 0;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 2;
}
.vertical-menu a {
    color: #000;
    padding: 10px 15px;
    text-decoration: none;
    display: block;
    font-size: 20px;
}
.vertical-menu a:hover {
    background-color: #ddd;
    color: black;
}

/* Login Form */
.login-container {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}
button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}
button:hover {
    background-color: #0056b3;
}

/* Photo Container */
.photo-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 20px;
}
.photo-container .box {
    background-color: #fff;
    border: 5px solid #333;
    padding: 20px;
    width: calc(33.33% - 40px);
    text-align: center;
    box-sizing: border-box;
}
.photo-container .box img {
    width: 100%;
    height: auto;
}
