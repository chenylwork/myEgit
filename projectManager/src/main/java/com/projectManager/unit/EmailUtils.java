package com.projectManager.unit;

import java.util.Date;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;

import com.projectManager.entity.User;

public class EmailUtils {

	// 验证邮件发出邮箱配置
	private static final String FROM = "chenylemail@163.com";

	public static void sendAccountActivateEmail(User user) {

		Session session = getSession();

		MimeMessage message = new MimeMessage(session);

		try {
			message.setSubject("这是一封激活账号的邮件");
			message.setSentDate(new Date());
			// setFrom 表示用哪个邮箱发送邮件
			message.setFrom(new InternetAddress(FROM));
			/**
			 * RecipientType.TO||BCC||CC TO表示主要接收人 BCC表示秘密抄送人 CC表示抄送人
			 * InternetAddress 接收者的邮箱地址
			 */
			message.setRecipient(RecipientType.TO, new InternetAddress(user.getEmail()));
			/*
			 * message.setContent("<a target='_BLANK' href='"+GenerateLinkUtils.
			 * generateActivateLink(user)+"'>"+user.getUsername()+
			 * "先生/女士您好，请点击此链接激活账号"+GenerateLinkUtils.generateActivateLink(user)
			 * +"</a>","text/html;charset=utf-8");
			 */
			message.setContent("<a target='_BLANK' href='"+GenerateLinkUtils.generateActivateLink(user)+"'>" + user.getUserID()
					+ "先生/女士您好，请点击此链接激活账号" + GenerateLinkUtils.generateActivateLink(user) + "</a>",
					"text/html;charset=utf-8");
			Transport.send(message);

		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}

	public static Session getSession() {
		Properties props = new Properties();
		props.setProperty("mail.transport.protocol", "smtp");// 指定发送的邮箱的邮箱协议
		props.setProperty("mail.smtp.host", "smtp.163.com");// 指定SMTP服务器
		props.setProperty("mail.smtp.port", "25"); // smtp是发信邮件服务器,端口是25
		props.setProperty("mail.smtp.auth", "true");// 指定是否需要SMTP验证

		Session session = Session.getInstance(props, new Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(FROM, "flzx3qc"); // 此处为邮箱客户端登录密码不是邮箱登录密码。
			}
		});
		return session;
	}

}
