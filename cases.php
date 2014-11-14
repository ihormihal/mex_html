  <?php include('chunks/head.php'); ?>
  </head>
  <body class="g-red-dark">
    <?php include('chunks/header.php'); ?> 
    
    <section class="section-main">
      <div class="container">
        <div class="col-md-12">
          <h1 class="pagetitle">Агенство</h1>
          <?php include('chunks/pagenav.php'); ?>
        </div>
      </div>
      <div class="gap"></div>
    </section>

    <div class="container">
      <a class="link" href="credentials.php"><h2 class="text-center"><i class="open-btn active"></i> Кейсы</h2></a>
      <div class="clearfix"></div>

        <?php include('chunks/case-item.php'); ?>
        <?php include('chunks/case-item.php'); ?>
        <?php include('chunks/case-item.php'); ?>
        <?php include('chunks/case-item.php'); ?>
        <?php include('chunks/case-item.php'); ?>

    </div>
    
    <!-- pligins -->
    <script src="design/plugins/jquery/jquery-2.1.1.min.js"></script>
    <script src="design/plugins/owl-carousel/owl.carousel.min.js"></script>
     <script src="design/plugins/fancybox/fancybox.js"></script>
    <!-- pligins end -->
    <!-- custom -->
    <script src="design/js/app.js"></script>
    <!-- custom end -->
  </body>
</html>