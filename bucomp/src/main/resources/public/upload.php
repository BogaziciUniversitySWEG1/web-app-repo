<?php
 
$output_dir = "upload/";
 
if(isset($_FILES["dosya"]))
{
    if ($_FILES["dosya"]["error"] > 0)
    {
      echo "Hata: " . $_FILES["file"]["error"] . "<br>";
    }
    else
    {
        move_uploaded_file($_FILES["dosya"]["tmp_name"],$output_dir. $_FILES["dosya"]["name"]);
 
     echo "Yüklenen dosya :".$_FILES["dosya"]["name"];
    }
 
}
?>