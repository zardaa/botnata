exports.donate = (id, ZARDA, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${ZARDA}*
╠════════════════════
║├≽️⚜ *OVO*: _0823-9707-5810_
║├≽️⚜ *PULSA*: _0823-9707-5810_
║├≽️⚜ *GOPAY*: _0823-9707-5810_
╠════════════════════
║  *${ZARDA}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│  *Instagram <Follow>*
║│ _${instagram}_
║│  *Creator ${ZARDA}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY NATABOT*_
╚════════════════════`
}

