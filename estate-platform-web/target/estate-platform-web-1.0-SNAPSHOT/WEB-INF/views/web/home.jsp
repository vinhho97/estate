<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@include file="/common/tag.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Trang chủ</title>
</head>
<body>
<div class="header_slide">
    <div class="header_bottom_left">
        <div class="categories">
            <ul>
                <h3>Thể loại</h3>
                <li>
                    <a href='#'>Thể thao</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="header_bottom_right">
        <div class="slider">
            <div id="slider">
                <img src="<c:url value='/image/background.jpg' />" alt="" height="460px" width="1000px">
            </div>
            <div class="clear"></div>
        </div>
    </div>
    <!--end bottom right-->
    <div class="clear"></div>
</div>
<div class="main">
    <div class="content">
        <div class="content_top">
            <div class="heading">
                <h3>Bài viết xem nhiều</h3>
            </div>
            <div class="clear"></div>
        </div>
        <div class="section group">
            <div class="grid_1_of_4 images_1_of_4">
                <a href="#">
                    <img src="#" alt="">
                </a>
                <h2>[title]</h2>
                <div class="price-details">
                    <div class="price-number">
                    </div>
                    <div class="add-cart">
                        <h4>
                            <a href="">Chi tiết</a>
                        </h4>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <div class="content_top">
            <div class="heading">
                <h3>Bài viết mới</h3>
            </div>
            <div class="clear"></div>
        </div>
        <div class="section group">
            <div class="grid_1_of_4 images_1_of_4">
                <a href="#">
                    <img src="#" alt="">
                </a>
                <h2>[title]</h2>
                <div class="price-details">
                    <div class="price-number">
                    </div>
                    <div class="add-cart">
                        <h4>
                            <a href="">Chi tiết</a>
                        </h4>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
