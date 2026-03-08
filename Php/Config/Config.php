<?php
class Database
{
    private $host = "localhost";
    private $username = "root";
    private $DB_password = "";
    private $DB_table = "full_stack_app";
    public $conn;
    function database()
    {
        $this->conn = new mysqli($this->host, $this->username, $this->DB_password, $this->DB_table);

        if ($this->conn->connect_error) {
            die("connected failed" . $this->conn->connect_error);
            return $this->conn;
        }
    }
}
