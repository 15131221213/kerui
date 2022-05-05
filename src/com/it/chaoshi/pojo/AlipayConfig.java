package com.it.chaoshi.pojo;

public class AlipayConfig {

    // 应用ID
    public static String app_id = "2021000119678836";

    // 商户私钥
    public static String merchant_private_key = "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCNivFyDR6UH04UBnRI3ziVBauXaKYXxOF7PiZklhDwLlvFqfYbXy+LGQ8juZrxsrjE4+GeUwy0+/XdgLHGZ3gHuF04EXHI7Xc9i+ZIsS330m1vF56W30Q/2cwmkfELS9RhOQMUS0EY3slQZxZ/8tXSHD+mfCbQQqgc7rS2ybBgj5eGTzoCe+0DHPDvvQQtnG0RambFnwLGH4yduQJrD+3+PVfx/4CLlxzLaCMUBMCK5YANKHhkXo+9wqHd8ypo40Y5i2klR40PjEYqJfF2WecKCcoOZrbvYhj3zEaLYA+l5L2ZjDamSIWoMtRoAeqwkp4Y+qm2/0Dq81QvLoyxEsgrAgMBAAECggEAFV03fGOGjgz7mAIxYx5uR/AHKl9dUpEhB50l5mDQRbB5oag5wX/oiTJLGrVVMc4sHWvYDjGy5U5ymfBm5O+RKnkleOUJK67MJLoNFEPKEHHumqoSAevJPWn+aoP0wiO79sDIOjPxq3NVJ5Gnz8Azjfc9lD+BDEZDYbqWBFEFEk3fML1tXY2H+Xbz6/3KpEsI0DBKV/XG6cNsyB/tfz9T50exMWdGOxDgjEXVuyPatZIbtkNmmxu4v3S7crOolHl7jQ4MoEUm9K+5UT5bfXbsCeeE84bKvVH4PNxzytVLRUlzfUQY51uvVLRC90YL6jb7q2zdbmpFk0aILlEHmWwFgQKBgQDvfZbJb0sQzWrgggF0T90p1m1LqbU4iVT8UjjmGPuKVJbVo5Nf/nIuz4iQjCABOWw7NiQ2WH5sxIy/6NoPkVAcK0rKENSmYYFup//PBqgoYRWu/TXwcvxXNx7CwNL2eIGHSwgwgwWrCMC4MvfVXlmHqRv3MGelHWHvJqEHnWw38QKBgQCXTNG/Rmi4ayN76Ftt27ylYrYG6qKzyTRljbvMbROVSKoesZSctl4U4HugK4Oz/3dfVLXfVCyj3+ntxeq/VCg6wooTX8OPx9o9ctYzG3jFXgSYPr6+ThtJfrgOhhkADyRAy5N+2pOHR+FMC2YhvJCC9wzynzy4VXv7Ak92hVK92wKBgGerFKeTnonicb5HaHvBynm+0Ubsan7Tq88hhHHOJKynmzdVfIkUKrcqrPHtRjlhcwFamWhQ/ED2//pewG32uBfJgbFggbyX/qA45tnmBsqb4/gAseWo0KSsPouNToTUezVmfGALh1uXCV1y6qcZFWZNBMcG1Aa8ZlVQgmo6ccrxAoGAcNtfVVL6yB06wbFHicGvjJn991jL9lluGRZI8CqoweEK7Iw/s0mhEeeEr6vluL0lWNnCNA0Ao1hhkPfhq8flnjcAcYUsRbKois9/EW47ftUrjji3ZRKz7fV063iBa3bf7ukrYyM9ilpGpseV7jJOhTIs2UmILGOvcEN/7IN0faMCgYA7hcURWvdeWJ8U2xG1rSAhnXFkiDLyLu5zvldZ6eOVuLt04SIkAahu/5Cvtttza6LWV5DpCCp0nQxXCPkiBBnX9ZSR5PwJJJJnyKen36cXaQ5bftpNf1mAOhYI+5KHRVJ+pJ+WqBErYRhw3PLzDvZMyhTWudfMkoUUTpHYi86cZw==";

    // 支付宝公钥
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApP3qpyscbcCDtknzkxb3nOIW+zbW72fydDF/XAFnA3Q+PBy7ixJQjnPLGQ2SWv/FPJ/OV6DI9s82Y5Sc22lNEYrpdb4k1ij6P7WuuTNw48ReL9AdR/vxO9ouV9k97jeILuaI0Q1fn+bD6ketMIAnz0r1OALwmZRyhIuhl1PtKRKpr0eQL2ldleJV5p0JFSvvk8L+1cKHgBNAoWdfmMQ6iEwUi1h1y2LcgzJzgJab2yEG59xLcStB9/+tAsxwtVylS1eDuQrCTwVo+WGnGawHWqkSWsjQq+A7Vw5HYYHNGFYDuQALp/OUL891HNozhddCR4cGK/kmDpNA2ycX6uYCLwIDAQAB";

    // 服务器异步通知页面路径
    public static String notify_url = "";

    // 页面跳转同步通知页面路径
    public static String return_url = "";

    // 签名方式
    public static String sign_type = "RSA2";

    // 字符编码格式
    public static String charset = "utf-8";

    // 支付宝网关
    public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";

}