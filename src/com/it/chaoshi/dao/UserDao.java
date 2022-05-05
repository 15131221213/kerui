package com.it.chaoshi.dao;

import com.it.chaoshi.pojo.User;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface UserDao {
    public User getUser(int id);

    List<User> getList();

    void addUser(User user);

    void updateUser(User user);

    void deleteUser(int id);
    User login(User user);
}
