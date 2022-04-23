package com.it.chaoshi.pojo;

public class Goods {
    private int id;
    private String name;
    private String color;
    private Double price;
    private String stylesize;
    private String pic;
    private int leve1ID;
    private int leve2ID;
    private Integer leve3ID;

    @Override
    public String toString() {
        return "Goods{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", color='" + color + '\'' +
                ", price=" + price +
                ", stylesize='" + stylesize + '\'' +
                ", pic='" + pic + '\'' +
                ", leve1ID=" + leve1ID +
                ", leve2ID=" + leve2ID +
                ", leve3ID=" + leve3ID +
                '}';
    }

    public int getLeve2ID() {
        return leve2ID;
    }

    public void setLeve2ID(int leve2ID) {
        this.leve2ID = leve2ID;
    }

    public int getLeve3ID() {
        return leve3ID;
    }

    public void setLeve3ID(int leve3ID) {
        this.leve3ID = leve3ID;
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

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getStylesize() {
        return stylesize;
    }

    public void setStylesize(String stylesize) {
        this.stylesize = stylesize;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public int getLeve1ID() {
        return leve1ID;
    }

    public void setLeve1ID(int leve1ID) {
        this.leve1ID = leve1ID;
    }
}
