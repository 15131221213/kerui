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
        ShoppingCart order = orderDao.getOrder(user.getId());
        if (order==null){
            ShoppingCart cart = new ShoppingCart();
            cart.setUserId(user.getId());
            cart.setLoginName(user.getLoginame());
            orderDao.addCartNull(cart);
            order = orderDao.getOrder(user.getId());
        }
        List<ShoppingItems> list = itemDao.getList(order.getId());
        for (int i=0;i<list.size();i++) {
           list.get(i).setGoods(goodsDao.getGoodByid(list.get(i).getGoodsId()));
        }
        order.setItems(list);
        order.setCost();
        orderDao.update(order);
        return order;
    }

    @Override
    public void addCart(ShoppingCart c) {
        orderDao.addCart(c);
    }

    @Override
    public void addItem(ShoppingItems items) {
        ShoppingItems item = itemDao.getItem(items);
        if (item==null){
            items.setQuantity(1);
            items.setGoods(goodsDao.getGoodByid(items.getGoodsId()));
            items.setCost();
            itemDao.addItem(items);
        }else {
            item.setQuantity(item.getQuantity()+1);
            item.setGoods(goodsDao.getGoodByid(item.getGoodsId()));
            item.setCost();
            itemDao.update(item);
        }
    }

    @Override
    public void update(ShoppingCart cart) {

       orderDao.update(cart);
    }

    @Override
    public void delItem(int id) {
        itemDao.delItem(id);
    }
    @Override
    public List<ShoppingCart> ordersuess(User user){

        return orderDao.getOrderSuss(user.getId());
    }

}
