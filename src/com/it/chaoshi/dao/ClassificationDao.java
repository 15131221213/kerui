package com.it.chaoshi.dao;

import com.it.chaoshi.pojo.Classification;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface ClassificationDao {
    public List<Classification> getByPid(int parentId);
}
