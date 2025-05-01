// Countdown Timer
const targetDate = new Date('2025-05-01T11:50:00').getTime();
const countdownContainer = document.getElementById('countdown-container');
const departmentSelection = document.getElementById('department-selection');
const tablesContainer = document.getElementById('tables-container');

let isCountdownFinished = false;
let tablesGenerated = false;

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0 && !isCountdownFinished) {
        isCountdownFinished = true;
        clearInterval(timer);
        countdownContainer.classList.add('hidden');
        departmentSelection.classList.add('visible');
        document.getElementById('congrats-footer').classList.remove('visible');
        generateTables(); // Generate tables hanya saat countdown selesai
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}, 1000);

// Student Data
const students = {
    TKJ: [
        { name: "ABI BAGUS PRASETYO", nisn: "0079699780", status: "Lulus" },
        { name: "ADIAN PRANATA WIJAYA KUSUMA", nisn: "0086808891", status: "Lulus" },
        { name: "AHMAD ZULKIFLI", nisn: "0063565627", status: "Lulus" },
        { name: "ANDRE PRABOWO", nisn: "0076693139", status: "Lulus" },
        { name: "BUKHORI MUSLIM", nisn: "0057852503", status: "Lulus" },
        { name: "ELGA SAPITRI", nisn: "0044849439", status: "Lulus" },
        { name: "FREDERICK GERHARD HARRY", nisn: "0075438547", status: "Lulus" },
        { name: "GESTI TRI WAHYUNI", nisn: "3074764895", status: "Lulus" },
        { name: "IBNU RAMADHANI EFENDY", nisn: "0056647048", status: "Lulus" },
        { name: "ISLAHUL LAILA", nisn: "0064492526", status: "Lulus" },
        { name: "JASVIN JHONATAN SIAGIAN", nisn: "0079898805", status: "Lulus" },
        { name: "KINANCY DESTRIANI", nisn: "0076821735", status: "Lulus" },
        { name: "LELY SURYANI", nisn: "0072850039", status: "Lulus" },
        { name: "LIDYA OKTA RAMADHANI", nisn: "0061928613", status: "Lulus" },
        { name: "LILIS MARLINA", nisn: "0034643659", status: "Lulus" },
        { name: "M. RAPLY AKBAR", nisn: "0063094076", status: "Lulus" },
        { name: "MUHAMMAD RAMA HIDAYAH", nisn: "0133458064", status: "Lulus" },
        { name: "NIA AGUSTINA", nisn: "0063930550", status: "Lulus" },
        { name: "OLO NAINGGOLAN", nisn: "0065345744", status: "Lulus" },
        { name: "RAISYAH ARDA OKTAVIANA", nisn: "0077573862", status: "Lulus" },
        { name: "RESTA RIANI BR SIJABAT", nisn: "0072094606", status: "Lulus" },
        { name: "RHAFI NUR KAMAL", nisn: "0076810768", status: "Lulus" },
        { name: "RIJAL SIJABAT", nisn: "0079200503", status: "Lulus" },
        { name: "SINTA", nisn: "0052424882", status: "Lulus" },
        { name: "SISKA YULANDARI", nisn: "0068900822", status: "Lulus" },
        { name: "SOPINA", nisn: "0065657109", status: "Lulus" },
        { name: "YASRIL PUJIANTO", nisn: "0074356014", status: "Lulus" },
        { name: "ZULFAHRUL", nisn: "0073271565", status: "Lulus" }
    ],    
    TKR: [
        { name: 'ABI ZAM ZAMI', nisn: '0079847157', status: 'Lulus' },
        { name: 'AHMAD FAREZI PRANATA', nisn: '0068871478', status: 'Lulus' },
        { name: 'ALDO ANDRIAN', nisn: '0075849960', status: 'Lulus' },
        { name: 'ALDY HARIYADI SYAHPUTRA', nisn: '0076133792', status: 'Lulus' },
        { name: 'ALZA THASYA HILLA', nisn: '0076089808', status: 'Lulus' },
        { name: 'ARYA BAYU PRATAMA', nisn: '0069504189', status: 'Lulus' },
        { name: 'BUDIANTO MANALU', nisn: '0077625594', status: 'Lulus' },
        { name: 'DEWA MAHARDIKA', nisn: '0065745511', status: 'Lulus' },
        { name: 'DIMAS WAHYUDA', nisn: '0062742279', status: 'Lulus' },
        { name: 'DUTA STEVEN LIESTIAWAN', nisn: '0065420711', status: 'Lulus' },
        { name: 'GUA VINDHU', nisn: '0071178223', status: 'Lulus' },
        { name: 'GUSTI WIRANDA', nisn: '0065075549', status: 'Lulus' },
        { name: 'HABIL ARRASYA', nisn: '0074549544', status: 'Lulus' },
        { name: 'HARDIANSYAH', nisn: '0062921858', status: 'Lulus' },
        { name: 'HARMEGI', nisn: '0054184676', status: 'Lulus' },
        { name: 'HOTMAN SAPUTRA', nisn: '0072638661', status: 'Lulus' },
        { name: 'KELVIN RISKY KURNIA', nisn: '0064598872', status: 'Lulus' },
        { name: 'LAMGANDA .Y.I. MARBUN', nisn: '0054158212', status: 'Lulus' },
        { name: 'M. AFRIZAL HAIRUN PRATAMA', nisn: '0079700010', status: 'Lulus' },
        { name: 'M. IMAM NOVERDI AL FAZRI', nisn: '3055040099', status: 'Lulus' },
        { name: 'M. KEVIN SAPUTRA', nisn: '0071179052', status: 'Lulus' },
        { name: 'MUHAMAD FATONI', nisn: '0062025957', status: 'Lulus' },
        { name: 'MUHAMAD TAUFIK', nisn: '0072182545', status: 'Lulus' },
        { name: 'NANANG PRAYOGI', nisn: '0037410969', status: 'Lulus' },
        { name: 'NUR DINDA', nisn: '0069364875', status: 'Lulus' },
        { name: 'RAHMAT', nisn: '0066576044', status: 'Lulus' },
        { name: 'RAKA JHOVANSA', nisn: '0078029283', status: 'Lulus' },
        { name: 'REONALDE NAINGGOLAN', nisn: '0065521611', status: 'Lulus' },
        { name: 'RISKY DARMAWAN', nisn: '0061357133', status: 'Lulus' },
        { name: 'ROID LUTHFI MUBARROK', nisn: '0077296050', status: 'Lulus' },
        { name: 'ROSDIANTO', nisn: '0056690180', status: 'Lulus' },
        { name: 'SULTHAN HANNANSYAH', nisn: '0077361940', status: 'Lulus' },
        { name: 'TAUFIQURRAHMAN', nisn: '0065196852', status: 'Lulus' },
        { name: 'ZULFAHMI AGIL', nisn: '0064233305', status: 'Lulus' }
    ],      
    TSM: [
        { name: 'ADITIA', nisn: '0035307948', status: 'Lulus' },
        { name: 'AEDO MIFTAKHUS SALIM', nisn: '0073086749', status: 'Lulus' },
        { name: 'ANGGA DWI SUPRATAMA', nisn: '0075650156', status: 'Lulus' },
        { name: 'BAGAS APRIYANDI', nisn: '0074728737', status: 'Lulus' },
        { name: 'DANU DWI HARIYANTO', nisn: '0064430989', status: 'Lulus' },
        { name: 'DANU MAYSANDI', nisn: '0055000864', status: 'Lulus' },
        { name: 'DEWA FEBRIYAN SAPUTRA', nisn: '0076855876', status: 'Lulus' },
        { name: 'DIMAS SAPUTRA', nisn: '0068001395', status: 'Lulus' },
        { name: 'DION DWI OKTA RAMADAN', nisn: '0063506949', status: 'Lulus' },
        { name: 'EGI SAPUTRA', nisn: '3060782690', status: 'Lulus' },
        { name: 'EKA SAPUTRA', nisn: '0045175099', status: 'Lulus' },
        { name: 'ELZAN ALRADJAZI', nisn: '0079192560', status: 'Lulus' },
        { name: 'GILANG KURNIAWAN', nisn: '0078842126', status: 'Lulus' },
        { name: 'GUSTINA EVA PRATIWI', nisn: '0068804782', status: 'Lulus' },
        { name: 'IRWANDI PRATAMA', nisn: '0078846117', status: 'Lulus' },
        { name: 'JOCELIN ANGGARA', nisn: '0061104192', status: 'Lulus' },
        { name: 'M. IKHSAN', nisn: '0069782768', status: 'Lulus' },
        { name: 'MEI OSCAR BINTANG PRATAMA', nisn: '0073949495', status: 'Lulus' },
        { name: 'MELANO RADIKA', nisn: '0139465183', status: 'Lulus' },
        { name: 'MILA JUNIATI', nisn: '0055281668', status: 'Lulus' },
        { name: 'MUHAMMAD ARYA DZAKY', nisn: '0075063932', status: 'Lulus' },
        { name: 'MUHAMMAD DENIS ATTAYAH', nisn: '0069861432', status: 'Lulus' },
        { name: 'MUHAMMAD SIDQI FERDIANSYAH', nisn: '0068016966', status: 'Lulus' },
        { name: 'MUHAMMAD YANIK', nisn: '0061200796', status: 'Lulus' },
        { name: 'NABIL GUSTIANSYAH', nisn: '0069570968', status: 'Lulus' },
        { name: 'RAHMADI', nisn: '3063663857', status: 'Lulus' },
        { name: 'REIVAN ADETYA PUTRA', nisn: '0068134871', status: 'Lulus' },
        { name: 'REYNOLD ANESLIUS SIPAHUTAR', nisn: '0062640283', status: 'Lulus' },
        { name: 'REZA ARDIANTO', nisn: '0077652060', status: 'Lulus' },
        { name: 'RILKE FEBRIAN SAPUTRA', nisn: '0071052579', status: 'Lulus' },
        { name: 'RIZKY DWI ZULIANTO', nisn: '0066830641', status: 'Lulus' },
        { name: 'SATRIA CANDRA', nisn: '0074724483', status: 'Lulus' },
        { name: 'SINDI APRILIANA', nisn: '0079961081', status: 'Lulus' },
        { name: 'WARYONO', nisn: '0052126196', status: 'Lulus' },
        { name: 'ABIZAR ALIF MAULANA', nisn: '0071797422', status: 'Lulus' }
    ],      
    TKP: [
        { name: 'ADITYA REZA PRATAMA', nisn: '0075020153', status: 'Lulus' },
        { name: 'AGUNG RIVAN CAHYONO', nisn: '0072967151', status: 'Lulus' },
        { name: 'AL RASYID ALFATAH', nisn: '0074765733', status: 'Lulus' },
        { name: 'ALIF MAULANA', nisn: '0072629845', status: 'Lulus' },
        { name: 'ALVINO ADITYA SAPUTRA', nisn: '0073648283', status: 'Lulus' },
        { name: 'ANDIKA PRATAMA', nisn: '0069803783', status: 'Lulus' },
        { name: 'ANGGA SAPUTRA', nisn: '0074563601', status: 'Lulus' },
        { name: 'ANUGRAH', nisn: '0063789771', status: 'Lulus' },
        { name: 'ARIZKI RAMADHAN', nisn: '0071044160', status: 'Lulus' },
        { name: 'ARKHAN DIKA SAPUTRA', nisn: '0073528546', status: 'Lulus' },
        { name: 'ASRI MAULIDYA', nisn: '0074346216', status: 'Lulus' },
        { name: 'BAGUS TRI WIBOWO', nisn: '0071054492', status: 'Lulus' },
        { name: 'DEDI RAHMADI', nisn: '0073160042', status: 'Lulus' },
        { name: 'DENI ARDIANSYAH', nisn: '0073955000', status: 'Lulus' },
        { name: 'DHIMAS TRI WIBOWO', nisn: '0071049125', status: 'Lulus' },
        { name: 'DIMAS RIFKI SAPUTRA', nisn: '0074668534', status: 'Lulus' },
        { name: 'DIMAS SAPUTRA', nisn: '0072332356', status: 'Lulus' },
        { name: 'DIMAS WAHYUDI', nisn: '0073190907', status: 'Lulus' },
        { name: 'DONI RAMADHAN', nisn: '0071157842', status: 'Lulus' },
        { name: 'EKA RAMADHAN', nisn: '0074678556', status: 'Lulus' },
        { name: 'FAJAR NUGRAHA', nisn: '0074784465', status: 'Lulus' },
        { name: 'FANDI PRASETYO', nisn: '0073027097', status: 'Lulus' },
        { name: 'FERDI SETIAWAN', nisn: '0073946824', status: 'Lulus' },
        { name: 'FIRMANSYAH', nisn: '0074485993', status: 'Lulus' },
        { name: 'HAFIZ RAMADHAN', nisn: '0074975382', status: 'Lulus' },
        { name: 'IRFAN SAPUTRA', nisn: '0074601988', status: 'Lulus' },
        { name: 'M. RIVALDY', nisn: '0074320250', status: 'Lulus' },
        { name: 'M. YUSUF ALFANDI', nisn: '0071053245', status: 'Lulus' },
        { name: 'MUHAMAD ANDIKA', nisn: '0074297089', status: 'Lulus' },
        { name: 'MUHAMAD FADHIL', nisn: '0074776523', status: 'Lulus' },
        { name: 'MUHAMAD RASYID', nisn: '0074879142', status: 'Lulus' },
        { name: 'NAUFAL KURNIAWAN', nisn: '0074297054', status: 'Lulus' },
        { name: 'RICKY ANANDA', nisn: '0073224968', status: 'Lulus' },
        { name: 'RIVALDI ANANDA', nisn: '0074125977', status: 'Lulus' },
        { name: 'RIZKY ALFIAN', nisn: '0073357760', status: 'Lulus' },
        { name: 'RONI SAPUTRA', nisn: '0073150934', status: 'Lulus' }
    ],     
    TITL: [
        { name: 'ADITYA RIZKY SAPUTRA', nisn: '0074200011', status: 'Lulus' },
        { name: 'AHMAD FIRMANSYAH', nisn: '0074200122', status: 'Lulus' },
        { name: 'ALDI PRATAMA', nisn: '0074200233', status: 'Lulus' },
        { name: 'ALFAN RIZKI', nisn: '0074200344', status: 'Lulus' },
        { name: 'ALIF SAPUTRA', nisn: '0074200455', status: 'Lulus' },
        { name: 'ANDI MAULANA', nisn: '0074200566', status: 'Lulus' },
        { name: 'ARIF RAHMAN', nisn: '0074200677', status: 'Lulus' },
        { name: 'ARMANDO', nisn: '0074200788', status: 'Lulus' },
        { name: 'BAYU WICAKSANA', nisn: '0074200899', status: 'Lulus' },
        { name: 'DENI SAPUTRA', nisn: '0074201000', status: 'Lulus' },
        { name: 'DIKA RAMADHAN', nisn: '0074201111', status: 'Lulus' },
        { name: 'FADHIL PRATAMA', nisn: '0074201222', status: 'Lulus' },
        { name: 'FAJAR ALIF', nisn: '0074201333', status: 'Lulus' },
        { name: 'FERI NURDIANSYAH', nisn: '0074201444', status: 'Lulus' },
        { name: 'GERRY PUTRA', nisn: '0074201555', status: 'Lulus' },
        { name: 'HAFIZ ANANDA', nisn: '0074201666', status: 'Lulus' },
        { name: 'IRFAN RIZKI', nisn: '0074201777', status: 'Lulus' },
        { name: 'IQBAL SAPUTRA', nisn: '0074201888', status: 'Lulus' },
        { name: 'MAULANA FIRDAUS', nisn: '0074201999', status: 'Lulus' },
        { name: 'M. RIZKI FAHREZA', nisn: '0074202000', status: 'Lulus' },
        { name: 'M. SYAHRIL', nisn: '0074202111', status: 'Lulus' },
        { name: 'NAUFAL PRATAMA', nisn: '0074202222', status: 'Lulus' },
        { name: 'RAFI SAPUTRA', nisn: '0074202333', status: 'Lulus' },
        { name: 'RAKA SANTOSO', nisn: '0074202444', status: 'Lulus' },
        { name: 'REZA PRATAMA', nisn: '0074202555', status: 'Lulus' },
        { name: 'RIZKY NURCAHYO', nisn: '0074202666', status: 'Lulus' },
        { name: 'SANDY FIRMANSYAH', nisn: '0074202777', status: 'Lulus' },
        { name: 'TIARA RAMADHANI', nisn: '0074202888', status: 'Lulus' },
        { name: 'WILDAN MAULANA', nisn: '0074202999', status: 'Lulus' },
        { name: 'YOGI SAPUTRA', nisn: '0074203111', status: 'Lulus' },
        { name: 'YUSRIL RAMADHAN', nisn: '0074203222', status: 'Lulus' }
    ],
    AK: [
        { name: 'ADINDA AZ ZAHRA', nisn: '0074112332', status: 'Lulus' },
        { name: 'ALIF RIZKI PRATAMA', nisn: '0073843972', status: 'Lulus' },
        { name: 'ALISYA SHAKILA', nisn: '0074112233', status: 'Lulus' },
        { name: 'AMANDA NURHALIZA', nisn: '0074112489', status: 'Lulus' },
        { name: 'ANA MEILANI', nisn: '0074108411', status: 'Lulus' },
        { name: 'ANNISA PUTRI MAULIDIA', nisn: '0074112834', status: 'Lulus' },
        { name: 'ARDILA ANGGRENI', nisn: '0074107844', status: 'Lulus' },
        { name: 'ASTRI FITRIA', nisn: '0074112357', status: 'Lulus' },
        { name: 'AYU LESTARI', nisn: '0074109842', status: 'Lulus' },
        { name: 'CINDY ANGGRAINI', nisn: '0074112044', status: 'Lulus' },
        { name: 'DEWI SARTIKA', nisn: '0074112345', status: 'Lulus' },
        { name: 'DIAN FITRIANI', nisn: '0074107643', status: 'Lulus' },
        { name: 'DWI NOVITA SARI', nisn: '0074112643', status: 'Lulus' },
        { name: 'ELLA ANGGRAINI', nisn: '0074112176', status: 'Lulus' },
        { name: 'FANNY AMALIA', nisn: '0074112899', status: 'Lulus' },
        { name: 'FIRA MAULIDA', nisn: '0074107342', status: 'Lulus' },
        { name: 'HIDAYATI NUR', nisn: '0074112211', status: 'Lulus' },
        { name: 'IKA FITRIYANI', nisn: '0074112556', status: 'Lulus' },
        { name: 'INDRI SAFITRI', nisn: '0074112665', status: 'Lulus' },
        { name: 'LAILA KUSUMA', nisn: '0074112777', status: 'Lulus' },
        { name: 'LINA MARLINA', nisn: '0074112888', status: 'Lulus' },
        { name: 'MEGA PUTRI', nisn: '0074112990', status: 'Lulus' },
        { name: 'MUTIA RAHMA', nisn: '0074113003', status: 'Lulus' },
        { name: 'NADIA RAHMAWATI', nisn: '0074108000', status: 'Lulus' },
        { name: 'NOVIA RIZKY', nisn: '0074109000', status: 'Lulus' },
        { name: 'PUTRI MELINDA', nisn: '0074109200', status: 'Lulus' },
        { name: 'RINA OKTAVIA', nisn: '0074113011', status: 'Lulus' },
        { name: 'SINTIA ARIFIN', nisn: '0074113122', status: 'Lulus' },
        { name: 'TIARA AMANDA', nisn: '0074113233', status: 'Lulus' },
        { name: 'ULFAH MAULIDYA', nisn: '0074113344', status: 'Lulus' },
        { name: 'WIDYA LESTARI', nisn: '0074113455', status: 'Lulus' },
        { name: 'YUNITA RAHMA', nisn: '0074113566', status: 'Lulus' }
    ]
};

// Generate Tables hanya saat countdown selesai
function generateTables() {
    if (tablesGenerated) return;
    tablesGenerated = true;
    
    Object.keys(students).forEach(department => {
        const table = document.createElement('table');
        table.className = `student-table ${department}`;
        table.style.display = 'none';
        
        table.innerHTML = `
            <thead>
                <tr>
                    <th colspan="3">${getDepartmentName(department)}</th>
                </tr>
                <tr>
                    <th>Nama</th>
                    <th>NISN</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${students[department].map(student => `
                    <tr>
                        <td>${student.name}</td>
                        <td>${student.nisn}</td>
                        <td><span class="teks-lulus">${student.status}</span></td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        
        tablesContainer.appendChild(table);
    });

    // Set event listeners setelah tabel digenerate
    document.querySelectorAll('.department-btn').forEach(button => {
        button.addEventListener('click', () => {
            const department = button.dataset.department;
            document.querySelectorAll('.student-table').forEach(table => {
                table.style.display = 'none';
            });
            const targetTable = document.querySelector(`.${department}`);
            if (targetTable) targetTable.style.display = 'table';

            document.getElementById('congrats-footer').classList.add('visible');
        });
    });
}

function getDepartmentName(abbreviation) {
    const names = {
        TKJ: "Teknik Komputer dan Jaringan",
        TKR: "Teknik Kendaraan Ringan",
        TSM: "Teknik Sepeda Motor",
        TKP: "Teknik Konstruksi Perkayuan",
        TITL: "Teknik Instalasi Tenaga Listrik",
        AK: "Akuntansi"
    };
    return names[abbreviation];
}