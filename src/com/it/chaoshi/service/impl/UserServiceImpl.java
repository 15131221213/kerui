package com.it.chaoshi.service.impl;

import com.it.chaoshi.dao.UserDao;
import com.it.chaoshi.pojo.User;
import com.it.chaoshi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    @Override
    public User getUser(int id) {
        User user = userDao.getUser(id);
        return user;
    }

    @Override
    public List<User> getList() {
        List<User> list = userDao.getList();
        return list;
    }

    @Override
    public void addUser(User user) {
        userDao.addUser(user);
    }

    @Override
    public void updetaUser(User user) {
        userDao.updateUser(user);
    }

    @Override
    public void deleteUser(int id) {
        userDao.deleteUser(id);
    }

    @Override
    public User login(User user) {
        return userDao.login(user);
    }
}
