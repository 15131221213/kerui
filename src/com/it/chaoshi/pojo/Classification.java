package com.it.chaoshi.pojo;

import java.util.List;

public class Classification {
    private int id;
    private String name;
    private int parentId;
    private int type;
    private String pic;
    private List<Classification> chinder;
    private List<Goods> goodsList;

    public List<Goods> getGoodsList() {
        return goodsList;
    }

    public void setGoodsList(List<Goods> goodsList) {
        this.goodsList = goodsList;
    }

    public List<Classification> getChinder() {
        return chinder;
    }

    public void setChinder(List<Classification> chinder) {
        this.chinder = chinder;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    @Override
    public String toString() {
        return "Classification{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", parentId=" + parentId +
                ", type=" + type +
                ", pic='" + pic + '\'' +
                ", chinder=" + chinder +
                '}';
    }
}
