<?php

get_header(); 

if ( have_posts() ) {
  while ( have_posts() ) {
    the_post(); ?>
    <main>
      <div class="board">

      <?php the_content(); ?>
      </div>
		</main>
  <?php }
} 


get_footer(); ?>