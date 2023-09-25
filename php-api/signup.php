<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");


// Database configuration
$host = "localhost";
$username = "root";
$password = "";
$database = "crud_api";

// Create a connection to the database
$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['firstname']) && !empty($data['lastname']) && !empty($data['email']) && !empty($data['password'])) {
        $firstname = $data['firstname'];
        $lastname = $data['lastname'];
        $email = $data['email'];
        $password = $data['password'];


        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $sql = mysqli_query($conn, "SELECT * FROM user WHERE email = '{$email}'");
            if(mysqli_num_rows($sql) > 0){
                echo json_encode(array("message" => "This email already exist!"));
                // echo "$email - This email already exist!";
            }
            else{
                if(strlen($password) >= 6){
                    $password = password_hash($password, PASSWORD_DEFAULT);
                    $sql = "INSERT INTO user (firstname, lastname, email, password) VALUES ('$firstname', '$lastname', '$email', '$password')";
                    $result = $conn->query($sql);
                    if ($result === TRUE) {
                        echo json_encode(array("message" => "User created"));
                    } else {
                        echo json_encode(array("message" => "User Not Created"));
                    }
                }
                else{
                    // echo "Short Password";
                    echo json_encode(array("message" => "Short Password"));
                }
            }

            




        // $sql = "INSERT INTO user (firstname, lastname, email, password) VALUES ('$firstname', '$lastname', '$email', '$password')";
        // $result = $conn->query($sql);
        // if ($result === TRUE) {
        //     echo json_encode(array("message" => "User created"));
        // } else {
        //     echo json_encode(array("message" => "User Not Created"));
        // }
        } 
            else {
                echo json_encode(array("message" => "Invalid email"));
            }
    }else {
        echo json_encode(array("message" => "Missing required data"));
        die();
    }

    
