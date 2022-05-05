package com.it.chaoshi.service;

import com.it.chaoshi.pojo.User;

import java.util.List;


public interface UserService {
    public User getUser(int id);

    List<User> getList();

    void addUser(User user);

    void updetaUser(User user);

    void deleteUser(int id);
    User login(User user);
}
