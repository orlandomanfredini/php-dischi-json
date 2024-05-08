<?php



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="./style.css">
    <title>HOME</title>
</head>
<body>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<div id="app">
    <section>
        <div class="container">
            <div class="row">
                <div v-for="music in content" class="col-4">
                    <div class="card">
                        <img :src="music.poster" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<script src="./app.js"></script>
</body>
</html>