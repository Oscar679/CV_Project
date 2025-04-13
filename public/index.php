<?php
include_once 'dbConnection.php';

$sql = "SELECT forename, lastname, description
        FROM USER WHERE user_id = 1";
$result = mysqli_query($connection, $sql);
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"> <!-- problem med css inladdning -->
    <!-- <script src="https://unpkg.com/typeit/dist/index.umd.js"></script> -->
    <script src="src/Main.js" language="javascript" type="text/javascript"></script>
    <script src="src/Content.js" language="javascript" type="text/javascript"></script>
    <script src="src/ElemUtil.js" language="javascript" type="text/javascript"></script>
    <script src="src/SectionChecker.js" language="javascript" type="text/javascript"></script>
    <!-- <script src="src/Query.js" language="javascript" type="text/javascript"></script> -->
    <title>This is me - Oscar Ekberg</title>
</head>

<body>
    <header id="header"></header>
    <section id="sectionContainer">
        <?php
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<p>";
            echo $row['forename'] . " " . $row['lastname'] . " " . $row['description'];
        }
        ?>
    </section> <!-- put articles dynamically inside here -->
    <footer id="footer"></footer>
</body>

</html>