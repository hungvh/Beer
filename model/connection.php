<?php
   
   $dbhost = 'mysql.hostinger.vn';
   $dbuser = 'u662417581_hung';
   $dbpass = 'conlaunha';
   $conn = mysql_connect($dbhost, $dbuser, $dbpass);
   
   if(! $conn )
   {
      die('Không thể kết nối: ' . mysql_error());
   }
   
   echo 'Kết nối thành công';
   mysql_close($conn);
?>