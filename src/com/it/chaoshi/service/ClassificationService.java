package com.it.chaoshi.service;

import com.it.chaoshi.pojo.Classification;

import java.util.List;

public interface ClassificationService {
    List<Classification> getCategoryTree();
    public List<Classification> getCategoryOne();
}
