<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Games</title>
    <link rel="stylesheet" href="../style.css" />
  </head>
  <body>
    <?php 
    $act=2;
    include 'php/header.php'?>

    <div class="page-wrap">
        <main class="maindiv">
            <div class="game-pres">
                <p>
                    This is where you can find our games. We developped 4 different games for now but more are to come ! </br> The games we developped are : Cross words, False friends quiz, Hanged men an WordsPerMinute.
                </p>            
            </div>
            <div>
                <?php include 'php/filesearch.php'?>
                <?php
                    $arr=count_files('./subpages','html',1);
                    $a=$arr[0];
                    $files=$arr[1];
                    for ($i=0;$i<$a;$i++){
                        $files[$i];
                        echo "<div games-list>
                                <iframe src=\"subpages/"; echo $files[$i]; echo "\" frameborder=\"0\" height=750 width=100%></iframe>
                            </div>";
                    }
                ?>
            </div>
        </main>
    </div>
    <?php include 'php/footer.php'?>

  </body>
</html>
