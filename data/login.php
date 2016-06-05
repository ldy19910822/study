<?php
	header('Content-Type:text/plain');
	$uname = $_REQUEST['uname'];
	$upwd = $_REQUEST['upwd'];

	//连接数据库查询
	$conn = mysqli_connect('127.0.0.1','root','','nets',3306);
	$sql = "SELECT * FROM nets_users WHERE user_name = '$uname' and user_pwd = '$upwd'";
	$result = mysqli_query($conn, $sql);

	$row = mysqli_fetch_assoc($result);

	if($row){
		echo 'OK';
	}else {
		echo 'ERROR';
	}

?>