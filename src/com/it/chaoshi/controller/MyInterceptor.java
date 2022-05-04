package com.it.chaoshi.controller;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class MyInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String uri = request.getRequestURI();

        if (uri.indexOf("/index")>=0) {
            return true;
        }
        if (uri.indexOf("/static")>=0) {
            return true;
        }
        if (uri.indexOf("/requst")>=0) {
            return true;
        }
        if (uri.toString().contains("/login")) {
            return true;
        }
        HttpSession session = request.getSession();
        if (session.getAttribute("loguser")==null){
            request.getRequestDispatcher("/index.jsp").forward(request,response);
            return false;
        }
        return true;
    }
}
