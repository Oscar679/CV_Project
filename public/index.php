<?php
include_once './dbConnection.php';

// Make sure to replace these values with your actual database credentials
$connection = mysqli_connect("your_host", "your_username", "your_password", "your_database");

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Query to get user data
$sql = "SELECT * FROM USER WHERE user_id = 1";
$result = mysqli_query($connection, $sql);

if (!$result) {
    die("Query failed: " . mysqli_error($connection)); // Check if the query was successful
}

if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<p>" . htmlspecialchars($row['forename']) . " " . htmlspecialchars($row['lastname']) . " - " . htmlspecialchars($row['description']) . "</p>";
    }
} else {
    echo "No data found or query failed.";
}
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="style.css">problem med css inladdning
     <script src="https://unpkg.com/typeit/dist/index.umd.js"></script>
    <script src="src/Main.js" language="javascript" type="text/javascript"></script>
    <script src="src/Content.js" language="javascript" type="text/javascript"></script>
    <script src="src/ElemUtil.js" language="javascript" type="text/javascript"></script>
    <script src="src/SectionChecker.js" language="javascript" type="text/javascript"></script> -->
    <!-- <script src="src/Query.js" language="javascript" type="text/javascript"></script> -->
    <title>This is me - Oscar Ekberg</title>
</head>

<body>
    <header id="header"></header>
    <section id="sectionContainer">
        <?php
        while ($row = mysqli_fetch_assoc($result)) {
            // Use htmlspecialchars to avoid XSS attacks
            echo "<p>" . htmlspecialchars($row['forename']) . " " . htmlspecialchars($row['lastname']) . " - " . htmlspecialchars($row['description']) . "</p>";
        }
        ?>
    </section> <!-- put articles dynamically inside here -->
    <footer id="footer"></footer>
</body>

</html>