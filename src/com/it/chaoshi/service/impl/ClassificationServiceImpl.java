package com.it.chaoshi.service.impl;

import com.it.chaoshi.controller.ClassificationController;
import com.it.chaoshi.dao.ClassificationDao;
import com.it.chaoshi.dao.GoodsDao;
import com.it.chaoshi.pojo.Classification;
import com.it.chaoshi.pojo.Goods;
import com.it.chaoshi.service.ClassificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClassificationServiceImpl implements ClassificationService {
    @Autowired
    private ClassificationDao classificationDao;
    @Override
    public List<Classification> getCategoryTree() {
        List<Classification> list = classificationDao.getByPid(0);
        for (Classification l1:list){
            List<Classification> list2 = classificationDao.getByPid(l1.getId());
            l1.setChinder(list2);
            for (Classification l2:list2){
                List<Classification> list3 = classificationDao.getByPid(l2.getId());
                l2.setChinder(list3);
            }
        }
        return list;
    }
    public List<Classification> getCategoryOne(){
        List<Classification> listone = classificationDao.getByPid(0);
        return listone;
    }
}
