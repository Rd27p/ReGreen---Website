document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("jadwalForm");
  if (!form) return;

  const tambahBtn = form.querySelector("button[type='button']");
  const logoutBtn = document.getElementById("logoutBtn");

  //untk logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Apakah Anda yakin ingin logout?")) {
        window.location.href = "../Login/login.html";
      }
    });
  }

  // acction tmbh jadwal
  tambahBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // proses mengambil data
    const namaKurir = form.querySelector("input[placeholder='Masukkan nama kurir']").value.trim();
    const jamMulai = form.querySelectorAll("input[type='time']")[0].value.trim();
    const jamSelesai = form.querySelectorAll("input[type='time']")[1].value.trim();
    const hari = form.querySelector("input[placeholder='Masukkan hari']").value.trim();
    const tanggal = form.querySelector("input[type='date']").value.trim();
    const jenis = form.querySelector("input[placeholder='Masukkan jenis sampah']").value.trim();
    const area = form.querySelector("input[placeholder='Masukkan area penjemputan']").value.trim();

    // Validasi isi data agar tidak kosong
    if (!namaKurir || !jamMulai || !jamSelesai || !hari || !tanggal || !jenis || !area) {
      alert("Semua kolom harus diisi sebelum menambahkan jadwal!!!");
      return; // stop di sini
    }

    // Simpan data ke localStorage
    const newJadwal = {
      id: Date.now(),
      namaKurir,
      jamMulai,
      jamSelesai,
      hari,
      tanggal,
      jenis,
      area
    };

    const existing = JSON.parse(localStorage.getItem("dataJadwal") || "[]");
    existing.push(newJadwal);
    localStorage.setItem("dataJadwal", JSON.stringify(existing));

    // Reset form
    form.reset();

    // Tampilkan alert sukses
    alert("Jadwal berhasil disimpan ke sistem!");
  });
});
