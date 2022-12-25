<?php
  $is_localhost=false;
  define("root", $is_localhost?"http://".$_SERVER['SERVER_NAME']."/hydeman":"https://".$_SERVER['SERVER_NAME']);
?>