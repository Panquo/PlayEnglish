                               
<?php
/*---------------------------------------------------------------*/
/*
    Titre : Compte le nombre de fichiers d'un répertoire                                                                 
                                                                                                                          
    URL   : https://phpsources.net/code_s.php?id=51
    Auteur           : R@f                                                                                                
    Date édition     : 01 Sept 2004                                                                                       
    Date mise à jour : 13 Aout 2019                                                                                      
    Rapport de la maj:                                                                                                    
    - fonctionnement du code vérifié                                                                                    
    - maintenance du code                                                                                                 
*/
/*---------------------------------------------------------------*/

function count_files($folder, $ext, $subfolders)
{
     // on rajoute le / à la fin du nom du dossier s'il ne l'est pas
     if(substr($folder, -1) != '/')
        $folder .= '/';
     
     // $ext est un tableau?
     $array = 0;
     if(is_array($ext))
        $array = 1;

     // ouverture du répertoire
     $rep = @opendir($folder);
     if(!$rep)
        return -1;
        
     $nb_files = 0;
     $files=array();
     // tant qu'il y a des fichiers
     while($file = readdir($rep))
     {
        // répertoires . et ..
        if($file == '.' || $file == '..')
         continue;
        
        // si c'est un répertoire et qu'on peut le lister
        if(is_dir($folder . $file) && $subfolders){
            // on appelle la fonction
         $nb_files += count_files($folder . $file, $ext, 1);
        // vérification de l'extension avec $array = 0
        }else if(!$array && substr($file, -strlen($ext))== $ext){
         $nb_files++;
         $files[]=$file;
        // vérification de l'extension avec $array = 1   
        }else if($array==1 && in_array(strtolower(substr(strrchr($file,"."),1)),$ext)){
         $nb_files++;
         $files[]=$file;
        }
     }
     
     // fermeture du rep
     closedir($rep);
     return array( $nb_files, $files );
} 
?>

