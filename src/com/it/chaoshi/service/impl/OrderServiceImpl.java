package com.it.chaoshi.service.impl;

import com.it.chaoshi.dao.GoodsDao;
import com.it.chaoshi.dao.ItemDao;
import com.it.chaoshi.dao.OrderDao;
import com.it.chaoshi.pojo.ShoppingCart;
import com.it.chaoshi.pojo.ShoppingItems;
import com.it.chaoshi.pojo.User;
import com.it.chaoshi.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sound.midi.Soundbank;
import java.util.List;
@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderDao orderDao;
    @Autowired
    private ItemDao itemDao;
    @Autowired
    private GoodsDao goodsDao;

    @Override
    public ShoppingCart getCart(User user) {
        try {
            orderDao.getOrder(user.getId());
        }catch (NullPointerException e){
            ShoppingCart cart = new ShoppingCart();
            cart.setUserId(user.getId());
            cart.setLoginName(user.getLoginame());
            orderDao.addCart(cart);
        }
        ShoppingCart order = orderDao.getOrder(user.getId());
        List<ShoppingItems> list = itemDao.getList(order.getId());
        for (ShoppingItems item:list){
            item.setGoods(goodsDao.getGoodByid(item.getGoodsId()));
        }
        order.setItems(list);
        return order;
    }

    @Override
    public void addCart(ShoppingCart c) {
        orderDao.addCart(c);
    }

    @Override
    public void addItem(ShoppingItems items) {
           try {
               itemDao.getItem(items);
           }catch (NullPointerException e){
               System.out.println(e.getMessage());
               itemDao.addItem(items);
           }
        ShoppingItems item = itemDao.getItem(items);
         item.setQuantity(items.getQuantity()+1);
         itemDao.update(item);


    }


}
