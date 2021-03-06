package com.it.chaoshi.controller;

import com.alibaba.druid.util.StringUtils;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.it.chaoshi.pojo.Goods;
import com.it.chaoshi.service.impl.GoodsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

@Controller
@RequestMapping("Goods")
public class GoodsController {
    @Autowired
    private GoodsServiceImpl goodsService;
    @RequestMapping("toadd")
    public String toAdd(){
        return "add";
    }
    @RequestMapping("toupdeta")
    public String toUpdeta(int id,Model model){
        Goods goods = goodsService.getGoodByid(id);
        model.addAttribute("goods",goods);
        return "updeta";
    }
//    @RequestMapping("add")
//    public String addGoods(Goods goods){
//        goodsService.addGoods(goods);
//        return "redirect:getGoodsList";
//    }
    @RequestMapping("delete")
    public String deleteGoods(int id){
        goodsService.deletGoods(id);
        return "redirect:getGoodsList";
    }
    @RequestMapping("update")
    public String updetaGoods(Goods goods){
        goodsService.updetaGoods(goods);
        return "redirect:getGoodsList";
    }
    @RequestMapping("getGoods")
    public String getGoods(@RequestParam("id") Integer leveID, Model model){
        Goods goods = goodsService.getGood(leveID);
//        System.out.println(leveID);
//        System.out.println("=========");
//        System.out.println(goods);
        model.addAttribute("goods",goods);
        return "details";
    }
    @RequestMapping("getGoodsList")
    public String getGoodsList(Model model,@RequestParam(value = "pageNum",defaultValue = "1") int pageNum,
                               @RequestParam(value = "pageSize",defaultValue = "5")int pageSize){
        Page<Object> objects = PageHelper.startPage(pageNum, pageSize);
        ArrayList<Goods> goods =goodsService.getGoodsList();
        PageInfo goodsPageInfo = new PageInfo(goods);
        model.addAttribute("glist",goodsPageInfo);
        return "list";
    }
    @RequestMapping("fileUpload")
    public
    String testResponseJson(Goods goods, @RequestParam("picname") MultipartFile
            uploadFile, HttpServletRequest request,Model model) throws Exception{
//???????????????
        String fileName = "";
//1.?????????????????????
        String uploadFileName = uploadFile.getOriginalFilename();
//2.?????????????????????
        String extendName = uploadFileName.substring(uploadFileName.lastIndexOf(".")+1,
                uploadFileName.length());
//3.?????????????????????????????????????????????
        String uuid = UUID.randomUUID().toString().replace("-", "").toUpperCase();
//4.??????????????????????????????
        if(!StringUtils.isEmpty(goods.getName())) {
            fileName = uuid+"_"+goods.getName()+"."+extendName;
        }else {
            fileName = uuid+"_"+uploadFileName;
        }
        System.out.println(fileName);
//2.??????????????????
        ServletContext context = request.getServletContext();
        String basePath = context.getRealPath("/static/pic");
//3.??????????????????????????????????????????
//        String datePath = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
//4.????????????????????????
        File file = new File(basePath);
        if(!file.exists()) {
            file.mkdirs();
        }
//5.?????? MulitpartFile ??????????????????????????????????????????????????????
        uploadFile.transferTo(new File(file,fileName));
        goods.setPic(fileName);
        goodsService.addGoods(goods);
        return "redirect:getGoodsList";
    }
}
