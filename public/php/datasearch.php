<?php
   $fichier = __DIR__ . '\\..\\ideas.txt';
   $file = file_get_contents($fichier);
   echo $file;
?>