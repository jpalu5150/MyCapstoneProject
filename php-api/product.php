<?php
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

// Set the HTTP response headers to allow cross-origin requests (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Check the HTTP method
$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case "GET":
        // Handle GET requests (Read)
        $id = intval($_GET["id"] ?? 0);
        if ($id > 0) {
            // Get a specific item
            getItem($conn, $id);
        } else {
            // Get all items
            getItems($conn);
        }
        break;
    case "POST":
        // Handle POST requests (Create)
        createItem($conn);
        break;
    case "PUT":
        // Handle PUT requests (Update)
        $id = intval($_GET["id"] ?? 0);
        updateItem($conn, $id);
        break;
    case "DELETE":
        // Handle DELETE requests (Delete)
        $id = intval($_GET["id"] ?? 0);
        deleteItem($conn, $id);
        break;
    default:
        http_response_code(405); // Method Not Allowed
        echo json_encode(array("message" => "Method not allowed."));
}

// Close the database connection
$conn->close();

function getItems($conn)
{
    $sql = "SELECT * FROM products";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $items = array();
        while ($row = $result->fetch_assoc()) {
            $items[] = $row;
        }
        http_response_code(200); // OK
        echo json_encode($items);
    } else {
        http_response_code(404); // Not Found
        echo json_encode(array("message" => "No items found."));
    }
}

function getItem($conn, $id)
{
    $sql = "SELECT * FROM products WHERE id = $id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        http_response_code(200); // OK
        echo json_encode($row);
    } else {
        http_response_code(404); // Not Found
        echo json_encode(array("message" => "Item not found."));
    }
}

function createItem($conn)
{
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->name)) {
        $name = $conn->real_escape_string($data->name);
        $sql = "INSERT INTO items (name) VALUES ('$name')";
        if ($conn->query($sql)) {
            http_response_code(201); // Created
            echo json_encode(array("message" => "Item created."));
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode(array("message" => "Error creating item: " . $conn->error));
        }
    } else {
        http_response_code(400); // Bad Request
        echo json_encode(array("message" => "Missing required data."));
    }
}

function updateItem($conn, $id)
{
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->name)) {
        $name = $conn->real_escape_string($data->name);
        $sql = "UPDATE items SET name = '$name' WHERE id = $id";
        if ($conn->query($sql)) {
            http_response_code(200); // OK
            echo json_encode(array("message" => "Item updated."));
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode(array("message" => "Error updating item: " . $conn->error));
        }
    } else {
        http_response_code(400); // Bad Request
        echo json_encode(array("message" => "Missing required data."));
    }
}

function deleteItem($conn, $id)
{
    $sql = "DELETE FROM items WHERE id = $id";
    if ($conn->query($sql)) {
        http_response_code(200); // OK
        echo json_encode(array("message" => "Item deleted."));
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(array("message" => "Error deleting item: " . $conn->error));
    }
}
?>
