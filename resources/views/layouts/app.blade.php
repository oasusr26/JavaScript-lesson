<!doctype html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>JavaScript lesson</title>
        <link rel="stylesheet" href="/css/style.css">
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script type="text/javascript" src="/js/script.js"></script>
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <div id="header">@include('commons.navbar')</div>
        <div class="container">
            <div class="row">
                <div class="col-sm-2 hidden-xs" style="background: plum;">sidebar-left</div>
                <div class="col-sm-8 col-xs-12">@yield('content')</div>
                <div class="col-sm-2 col-xs-12" style="background: skyblue;" >sidebar-right</div>
            </div>
        </div>
        <div id="footer">@include('commons.footer')</div>





        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </body>
</html>