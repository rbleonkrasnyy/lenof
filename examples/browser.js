<!DOCTYPE html>
<html>
    <head>
        <title>lenOf example</title>
    </head>
    <body>
        <p></p>
        <script src="../src/lenof.js"></script>
        <script>
            const len = lenOf({
                name: "Leonid Krasovsky",
                message: "I love Natalie",
                reason: "She's pretty",
            });

            document.querySelector('p').textContent = len;
        </script>
    </body>
</html>
