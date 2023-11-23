const { Chat } = require("../models")
const { Message } = require("../models")
const { Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

class chatController {

  //  /chats/find-or-create | buat obrolan chat jika yg di input di body tidak ada / ada salah satu yg tidak ada
  static createUserChat(req, res, next) {
    const { userone_unique_id, usertwo_unique_id } = req.body
    Chat.findOne({
      where: {
        userone_unique_id, 
        usertwo_unique_id,
      }
    })
      .then(async data => {
        if (data) {
          return res.status(200).json({
            status: [200, 'Success'],
            halaman: 'Create Chat',
            message: 'Data chat berhasil didapat!',
            data,
          });
        }
        else {
          const newChat = await Chat.create({
            chat_unique_id: uuidv4(),
            userone_unique_id,
            usertwo_unique_id,
          });
          res.status(201).json({
            status: [201, 'Success'],
            halaman: 'Create Chat',
            message: 'Data chat berhasil dibuat!',
            data: newChat
          });
        }
      })
      .catch(err => {
        return res.status(500).json({
          status: [500, 'Failed'],
          halaman: 'Create Chat',
          message: 'Something went wrong',
          error: err
        });
      });
  }

  //  /chats/find-all | cari semua obrolan chat yang ada kitanya , untuk user box
  static findAllUserChats(req, res, next) {
    // const { chat_unique_id } = req.params  // ubah route juga jika ingin pakai params
    const { unique_id: chat_unique_id  } = req.userData
    Chat.findAll({
      where: {
        [Op.or]: {
          userone_unique_id: chat_unique_id, 
          usertwo_unique_id: chat_unique_id,
        }
      }
    })
      .then(async data => {
        
        if (data) {
          return res.status(200).json({
            status: [200, 'Success'],
            halaman: 'FindAllUserChat',
            message: 'Data chat berhasil didapat!',
            data,
          });
        }
        else {
          res.status(404).json({
            status: [404, 'Failed'],
            halaman: 'FindAllUserChat',
            message: 'Data chat tidak ditemukan!',
          });
        }
      })
      .catch(err => {
        return res.status(500).json({
          status: [500, 'Failed'],
          halaman: 'FindAllUserChat UserBox',
          message: 'Something went wrong',
          error: err
        });
      });
  }

  //  /chats/find/:userone_unique_id/:usertwo_unique_id | cari obrolan chat yg spesifik
  static findUserChat(req, res, next) {
    const { userone_unique_id, usertwo_unique_id } = req.params
    Chat.findOne({
      where: {
        userone_unique_id, 
        usertwo_unique_id,
      }
    })
      .then(async data => {
        if (data) {
          return res.status(200).json({
            status: [200, 'Success'],
            halaman: 'findUserChat',
            message: 'Data chat berhasil didapat!',
            data,
          });
        }
        else {
          res.status(404).json({
            status: [404, 'Failed'],
            halaman: 'findUserChat',
            message: 'Data chat tidak ditemukan!',
          });
        }
      })
      .catch(err => {
        return res.status(500).json({
          status: [500, 'Failed'],
          halaman: 'findUserChat',
          message: 'Something went wrong',
          error: err
        });
      });
  }


  //  /messages | kirim pesan
  static async createMessage(req, res, next) {
    try {
      const { chat_unique_id, text } = req.body
      const { unique_id: sender_unique_id  } = req.userData
      console.log(sender_unique_id)
      const newMessage = await Message.create({
        chat_unique_id,
        sender_unique_id,
        text,
      })
      res.status(201).json({
        status: [201, 'Success'],
        halaman: 'createMessage',
        message: 'Kirim Message Berhasil!',
        data: newMessage
      });
    }
    catch (err) {
      return res.status(500).json({
        status: [500, 'Failed'],
        halaman: 'createMessage',
        message: 'Something went wrong',
        error: err.message
      });
    }
  }

  //  /messages/fidn-all | get semua pesan
  static async getMessage(req, res, next) {
    try {
      const { chat_unique_id } = req.params
      // const { unique_id: chat_unique_id  } = req.userData
      const response = await Message.findAll({
        where: {
          chat_unique_id,
        }
      })
      res.status(200).json({
        status: [200, 'Success'],
        halaman: 'getMessage',
        message: 'Get Message Berhasil!',
        data: response
      })
    }
    catch (err) {
      return res.status(500).json({
        status: [500, 'Failed'],
        halaman: 'createMessage',
        message: 'Something went wrong',
        error: err
      })
    }
  }

}

module.exports = chatController