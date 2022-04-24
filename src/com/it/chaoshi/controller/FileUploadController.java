package com.it.chaoshi.controller;

import com.alibaba.druid.util.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Controller("fileUploadController")
public class FileUploadController {
    /**
     * 文件上传
     */
    @RequestMapping("/fileUpload")
    public
    String testResponseJson(String picname, MultipartFile
            uploadFile, HttpServletRequest request) throws Exception{
//定义文件名
        String fileName = "";
//1.获取原始文件名
        String uploadFileName = uploadFile.getOriginalFilename();
//2.截取文件扩展名
        String extendName = uploadFileName.substring(uploadFileName.lastIndexOf(".")+1,
                uploadFileName.length());
//3.把文件加上随机数，防止文件重复
        String uuid = UUID.randomUUID().toString().replace("-", "").toUpperCase();
//4.判断是否输入了文件名
        if(!StringUtils.isEmpty(picname)) {
            fileName = uuid+"_"+picname+"."+extendName;
        }else {
            fileName = uuid+"_"+uploadFileName;
        }
        System.out.println(fileName);
//2.获取文件路径
        ServletContext context = request.getServletContext();
        String basePath = context.getRealPath("/uploads");
//3.解决同一文件夹中文件过多问题
        String datePath = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
//4.判断路径是否存在
        File file = new File(basePath+"/"+datePath);
        if(!file.exists()) {
            file.mkdirs();
        }
//5.使用 MulitpartFile 接口中方法，把上传的文件写到指定位置
        uploadFile.transferTo(new File(file,fileName));
        return "success";
    }
}