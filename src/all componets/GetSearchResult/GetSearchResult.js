import $ from 'jquery';
import {navbar_btn_onclick} from '../Navbar/Navbar';
import {today_content_data} from '../ImageOfDay/IODjs';
$(document).ready(function () {
    document.getElementById('navbar-search-form').addEventListener('submit', function(e){
        navbar_btn_onclick();
        e.preventDefault();
        let EnterDate=document.getElementById('search_box_end_date').value;
        today_content_data(EnterDate);
    });
});
