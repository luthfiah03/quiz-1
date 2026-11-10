// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini
// ===== CLASS MARIO =====
class Mario {
    // attribute
    HP: number;
    speed: number;
    positionX: number;
    positionY: number;
    invincible: boolean;
    currentForm: string;

    // constructor: nilai awal (default) Mario sesuai soal
    constructor() {
        this.HP = 1;
        this.speed = 5;
        this.positionX = 0;
        this.positionY = 0;
        this.invincible = false;
        this.currentForm = "mario";
    }

    // 4. Diserang
    getAttacked(): void {
        if (this.invincible) {
            console.log("Mario kebal, serangan tidak berpengaruh");
        } else {
            this.HP -= 1;
            this.currentForm = "mario";
            console.log(`Mario diserang! HP: ${this.HP}, form: ${this.currentForm}`);
        }
    }

    // 5. Bergerak ke kanan
    moveRight(): void {
        this.positionX += this.speed;
        console.log(`Mario ke kanan, positionX: ${this.positionX}`);
    }

    // 6. Bergerak ke kiri
    moveLeft(): void {
        this.positionX -= this.speed;
        console.log(`Mario ke kiri, positionX: ${this.positionX}`);
    }
}

// ===== INHERITANCE: class induk Item =====
class Item {
    // method ini akan di-override oleh class anak
    use(mario: Mario): void {
        console.log("Item dipakai");
    }
}

// 1. SuperMushroom mewarisi Item
class SuperMushroom extends Item {
    use(mario: Mario): void {
        mario.currentForm = "super mario";
        mario.HP += 1;
        console.log(`Mario jadi ${mario.currentForm}, HP: ${mario.HP}`);
    }
}

// 2. FireFlower mewarisi Item
class FireFlower extends Item {
    use(mario: Mario): void {
        mario.currentForm = "fire mario";
        mario.HP += 1;
        console.log(`Mario jadi ${mario.currentForm}, HP: ${mario.HP}, dapat menembakkan bola api`);
    }
}

// 3. SuperStar mewarisi Item
class SuperStar extends Item {
    use(mario: Mario): void {
        mario.invincible = true;
        console.log("Mario kebal terhadap serangan");
    }
}

// ===== OBJECT =====
const mario = new Mario();
const jamur = new SuperMushroom();
const bunga = new FireFlower();
const bintang = new SuperStar();

mario.moveRight();
mario.moveLeft();

jamur.use(mario);
bunga.use(mario);
mario.getAttacked();

bintang.use(mario);

// ===== POLYMORPHISM =====
// Satu array bertipe Item, method use() sama tapi hasilnya beda-beda
const semuaItem: Item[] = [new SuperMushroom(), new FireFlower(), new SuperStar()];
const marioBaru = new Mario();

for (const item of semuaItem) {
    item.use(marioBaru);
}