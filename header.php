<!DOCTYPE html>
<html <?php language_attributes(); ?>>

  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" >
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
  </head>

  <body <?php body_class(); ?>>
		<header id="header" class="header">
			<div class="header__logo">
				<a href="<?php echo site_url() ?>" style="background-image: url(<?php echo get_theme_file_uri('/images/logo.svg'); ?>);" alt="logo"></a>
			</div>
			
			<nav class="header__menu-wrapper">
				<ul id="ftmMenu" class="header__menu">
					<li data-menuanchor="about" class="active"><a href="<?php echo site_url('/') ?>#about">학과소개</a></li>
					<li data-menuanchor="curriculum"><a href="<?php echo site_url('/') ?>#curriculum">교육과정</a></li>
					<li data-menuanchor="professors"><a href="<?php echo site_url('/') ?>#professors">교수소개</a></li>
					<li data-menuanchor="q&a"><a href="<?php echo site_url('/') ?>#q&a">문의게시판</a></li>
					<!-- <li data-menuanchor="q&a"><a href="<?php echo site_url('/qa') ?>">문의게시판</a></li>
					<li data-menuanchor="test"><a href="<?php echo site_url('/') ?>#test">테스트</a></li> -->
				</ul>

				<ul class="header__links">
					<li><a href="">HOME</a></li>
					<li><a href="">COMMUNITY</a></li>
					<li><a href="http://friedscreen.com/wp/">FRIED SCREEN</a></li>
				</ul>

				<ul class="header__language">
					<li><a href="">KO</a></li>
					<li><a href="">EN</a></li>
					<li><a href="">CN</a></li>
				</ul>
			</nav>

			<button class="burger">
				<span class="burger__line"></span>
				<span class="burger__line"></span>
				<span class="burger__line"></span>
				<span class="burger__line"></span>
			</button>

		</header>
