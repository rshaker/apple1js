// From: http://apple1.chez.com/Apple1project/index.html

// Pom1 Save : LittleTower.txt
// Load the program with File - Load Memory ...
// Then type 300R to execute Little Tower
// Have Fun :-)

// Patch at 888 suggested by phantomxb

/*
C100R
0300.14CDR
300R
*/

/*globals tapes: true */

tapes['Little Tower'] = {
    script: 'C100R\n0300.14CDR\n300R\n',
    tracks: [[ // 0300.14CD
        0xD8, 0x20, 0xEB, 0x08, 0xA9, 0x01, 0x85, 0x10,
        0xA9, 0x00, 0x85, 0x11, 0x85, 0x15, 0x85, 0x12,
        0x85, 0x13, 0x85, 0x14, 0xA9, 0xFF, 0x85, 0x16,
        0xA9, 0x00, 0x85, 0x04, 0x4C, 0x1F, 0x03, 0xA5,
        0x04, 0xD0, 0x03, 0x20, 0xE4, 0x06, 0x20, 0xA0,
        0x08, 0x20, 0x2F, 0x03, 0x4C, 0x1F, 0x03, 0xA9,
        0xB3, 0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03, 0x20,
        0x7F, 0x08, 0x30, 0x78, 0xA9, 0xAE, 0x85, 0x02,
        0xA9, 0x0C, 0x85, 0x03, 0x20, 0x7F, 0x08, 0x30,
        0x77, 0xA9, 0xB8, 0x85, 0x02, 0xA9, 0x0C, 0x85,
        0x03, 0x20, 0x7F, 0x08, 0x30, 0x6D, 0xA9, 0xBD,
        0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03, 0x20, 0x7F,
        0x08, 0x30, 0x65, 0xA9, 0xC2, 0x85, 0x02, 0xA9,
        0x0C, 0x85, 0x03, 0x20, 0x7F, 0x08, 0x30, 0x58,
        0xA9, 0xCD, 0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03,
        0x20, 0x7F, 0x08, 0x30, 0x72, 0xA5, 0x10, 0xC9,
        0x01, 0xD0, 0x03, 0x4C, 0x34, 0x04, 0xC9, 0x02,
        0xD0, 0x03, 0x4C, 0xC7, 0x04, 0xC9, 0x03, 0xD0,
        0x03, 0x4C, 0x30, 0x05, 0xC9, 0x04, 0xD0, 0x03,
        0x4C, 0x93, 0x05, 0xC9, 0x05, 0xD0, 0x03, 0x4C,
        0x08, 0x06, 0xC9, 0x06, 0xD0, 0x03, 0x4C, 0x6D,
        0x06, 0xA9, 0x52, 0x85, 0x02, 0xA9, 0x0C, 0x85,
        0x03, 0x20, 0xCF, 0x08, 0xA9, 0xD6, 0x85, 0x02,
        0xA9, 0x0A, 0x85, 0x03, 0x20, 0xCF, 0x08, 0x60,
        0x4C, 0x1A, 0xFF, 0xA9, 0x00, 0x85, 0x04, 0x60,
        0xA9, 0xC4, 0x85, 0x02, 0xA9, 0x0B, 0x85, 0x03,
        0x20, 0xCF, 0x08, 0x20, 0xA0, 0x08, 0xA9, 0xC7,
        0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03, 0x20, 0x7F,
        0x08, 0x10, 0xF0, 0xA9, 0x1B, 0x85, 0x02, 0xA9,
        0x0C, 0x85, 0x03, 0x20, 0xCF, 0x08, 0x60, 0xA9,
        0x6F, 0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03, 0x20,
        0xCF, 0x08, 0xA5, 0x12, 0x30, 0x0C, 0xA9, 0xA5,
        0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03, 0x20, 0xCF,
        0x08, 0x60, 0xA9, 0x84, 0x85, 0x02, 0xA9, 0x0C,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0xA5, 0x13, 0x10,
        0x0B, 0xA9, 0x8B, 0x85, 0x02, 0xA9, 0x0C, 0x85,
        0x03, 0x20, 0xCF, 0x08, 0xA5, 0x14, 0x10, 0x0B,
        0xA9, 0x94, 0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03,
        0x20, 0xCF, 0x08, 0x60, 0xA9, 0xD9, 0x85, 0x02,
        0xA9, 0x0C, 0x85, 0x03, 0x20, 0x7F, 0x08, 0x30,
        0x28, 0xA9, 0x69, 0x85, 0x02, 0xA9, 0x0D, 0x85,
        0x03, 0x20, 0x7F, 0x08, 0x30, 0x24, 0xA9, 0x86,
        0x85, 0x02, 0xA9, 0x0D, 0x85, 0x03, 0x20, 0x7F,
        0x08, 0x30, 0x33, 0xA9, 0x80, 0x85, 0x02, 0xA9,
        0x0D, 0x85, 0x03, 0x20, 0x7F, 0x08, 0x30, 0x46,
        0x60, 0xA9, 0x02, 0x85, 0x10, 0xA9, 0x00, 0x85,
        0x04, 0x60, 0xA5, 0x11, 0x30, 0x0C, 0xA9, 0x3C,
        0x85, 0x02, 0xA9, 0x11, 0x85, 0x03, 0x20, 0xCF,
        0x08, 0x60, 0xA9, 0x50, 0x85, 0x02, 0xA9, 0x11,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0x60, 0xA5, 0x12,
        0x30, 0x0C, 0xA9, 0x1C, 0x85, 0x02, 0xA9, 0x12,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0x60, 0xA9, 0x3B,
        0x85, 0x02, 0xA9, 0x12, 0x85, 0x03, 0x20, 0xCF,
        0x08, 0xA9, 0xFF, 0x85, 0x11, 0x60, 0xA5, 0x11,
        0x30, 0x0C, 0xA9, 0x3C, 0x85, 0x02, 0xA9, 0x11,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0x60, 0xA9, 0x03,
        0x85, 0x10, 0xA9, 0x00, 0x85, 0x04, 0x60, 0xA9,
        0xD7, 0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03, 0x20,
        0x7F, 0x08, 0x30, 0x28, 0xA9, 0xD9, 0x85, 0x02,
        0xA9, 0x0C, 0x85, 0x03, 0x20, 0x7F, 0x08, 0x30,
        0x24, 0xA9, 0x4B, 0x85, 0x02, 0xA9, 0x0D, 0x85,
        0x03, 0x20, 0x7F, 0x08, 0x30, 0x26, 0xA9, 0x58,
        0x85, 0x02, 0xA9, 0x0D, 0x85, 0x03, 0x20, 0x7F,
        0x08, 0x30, 0x25, 0x60, 0xA9, 0x01, 0x85, 0x10,
        0xA9, 0x00, 0x85, 0x04, 0x60, 0xA9, 0x81, 0x85,
        0x02, 0xA9, 0x11, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0x68, 0x4C, 0x1A, 0xFF, 0xA9, 0xAB, 0x85, 0x02,
        0xA9, 0x11, 0x85, 0x03, 0x20, 0xCF, 0x08, 0x60,
        0xA9, 0xDF, 0x85, 0x02, 0xA9, 0x11, 0x85, 0x03,
        0x20, 0xCF, 0x08, 0xA9, 0xFF, 0x85, 0x12, 0x60,
        0xA9, 0xDB, 0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03,
        0x20, 0x7F, 0x08, 0x30, 0x28, 0xA9, 0xDD, 0x85,
        0x02, 0xA9, 0x0C, 0x85, 0x03, 0x20, 0x7F, 0x08,
        0x30, 0x24, 0xA9, 0x3D, 0x85, 0x02, 0xA9, 0x0D,
        0x85, 0x03, 0x20, 0x7F, 0x08, 0x30, 0x20, 0xA9,
        0x76, 0x85, 0x02, 0xA9, 0x0D, 0x85, 0x03, 0x20,
        0x7F, 0x08, 0x30, 0x1F, 0x60, 0xA9, 0x01, 0x85,
        0x10, 0xA9, 0x00, 0x85, 0x04, 0x60, 0xA9, 0x04,
        0x85, 0x10, 0xA9, 0x00, 0x85, 0x04, 0x60, 0xA9,
        0x55, 0x85, 0x02, 0xA9, 0x12, 0x85, 0x03, 0x20,
        0xCF, 0x08, 0x60, 0xA9, 0x72, 0x85, 0x02, 0xA9,
        0x12, 0x85, 0x03, 0x20, 0xCF, 0x08, 0xA9, 0xFF,
        0x85, 0x13, 0x60, 0xA9, 0xDD, 0x85, 0x02, 0xA9,
        0x0C, 0x85, 0x03, 0x20, 0x7F, 0x08, 0x30, 0x35,
        0xA9, 0xE0, 0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03,
        0x20, 0x7F, 0x08, 0x30, 0x31, 0xA9, 0xD9, 0x85,
        0x02, 0xA9, 0x0C, 0x85, 0x03, 0x20, 0x7F, 0x08,
        0x30, 0x2D, 0xA9, 0x21, 0x85, 0x02, 0xA9, 0x0D,
        0x85, 0x03, 0x20, 0x7F, 0x08, 0x30, 0x29, 0xA9,
        0x31, 0x85, 0x02, 0xA9, 0x0D, 0x85, 0x03, 0x20,
        0x7F, 0x08, 0x30, 0x28, 0x60, 0xA9, 0x06, 0x85,
        0x10, 0xA9, 0x00, 0x85, 0x04, 0x60, 0xA9, 0x03,
        0x85, 0x10, 0xA9, 0x00, 0x85, 0x04, 0x60, 0xA9,
        0x05, 0x85, 0x10, 0xA9, 0x00, 0x85, 0x04, 0x60,
        0xA9, 0x91, 0x85, 0x02, 0xA9, 0x12, 0x85, 0x03,
        0x20, 0xCF, 0x08, 0x60, 0xA9, 0x03, 0x85, 0x02,
        0xA9, 0x13, 0x85, 0x03, 0x20, 0xCF, 0x08, 0x60,
        0xA9, 0x07, 0x85, 0x02, 0xA9, 0x0D, 0x85, 0x03,
        0x20, 0x7F, 0x08, 0x30, 0x28, 0xA9, 0x14, 0x85,
        0x02, 0xA9, 0x0D, 0x85, 0x03, 0x20, 0x7F, 0x08,
        0x30, 0x2B, 0xA9, 0xD7, 0x85, 0x02, 0xA9, 0x0C,
        0x85, 0x03, 0x20, 0x7F, 0x08, 0x30, 0x2A, 0xA9,
        0xFD, 0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03, 0x20,
        0x7F, 0x08, 0x30, 0x26, 0x60, 0xA9, 0x32, 0x85,
        0x02, 0xA9, 0x13, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0xA9, 0xFF, 0x85, 0x14, 0x60, 0xA9, 0x6E, 0x85,
        0x02, 0xA9, 0x13, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0x60, 0xA9, 0x04, 0x85, 0x10, 0xA9, 0x00, 0x85,
        0x04, 0x60, 0xA9, 0xFF, 0x85, 0x15, 0xA9, 0x00,
        0x85, 0x04, 0x85, 0x13, 0x60, 0xA9, 0xE0, 0x85,
        0x02, 0xA9, 0x0C, 0x85, 0x03, 0x20, 0x7F, 0x08,
        0x30, 0x1B, 0xA9, 0xE5, 0x85, 0x02, 0xA9, 0x0C,
        0x85, 0x03, 0x20, 0x7F, 0x08, 0x30, 0x2E, 0xA9,
        0xF2, 0x85, 0x02, 0xA9, 0x0C, 0x85, 0x03, 0x20,
        0x7F, 0x08, 0x30, 0x31, 0x60, 0xA5, 0x16, 0x10,
        0x0F, 0xA9, 0x67, 0x85, 0x02, 0xA9, 0x14, 0x85,
        0x03, 0x20, 0xCF, 0x08, 0x68, 0x4C, 0x1A, 0xFF,
        0xA9, 0x04, 0x85, 0x10, 0xA9, 0xFF, 0x85, 0x16,
        0xA9, 0x00, 0x85, 0x04, 0x60, 0xA9, 0xD3, 0x85,
        0x02, 0xA9, 0x13, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0xA9, 0x00, 0x85, 0x16, 0x60, 0xA5, 0x16, 0x10,
        0x0C, 0xA9, 0xFA, 0x85, 0x02, 0xA9, 0x13, 0x85,
        0x03, 0x20, 0xCF, 0x08, 0x60, 0xA9, 0x1D, 0x85,
        0x02, 0xA9, 0x14, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0x68, 0x4C, 0x1A, 0xFF, 0xA9, 0xFF, 0x85, 0x04,
        0xA5, 0x10, 0xC9, 0x01, 0xD0, 0x03, 0x4C, 0x1F,
        0x07, 0xC9, 0x02, 0xD0, 0x03, 0x4C, 0x57, 0x07,
        0xC9, 0x03, 0xD0, 0x03, 0x4C, 0x8F, 0x07, 0xC9,
        0x04, 0xD0, 0x03, 0x4C, 0xC7, 0x07, 0xC9, 0x05,
        0xD0, 0x03, 0x4C, 0xFF, 0x07, 0xC9, 0x06, 0xD0,
        0x03, 0x4C, 0x47, 0x08, 0xA9, 0x52, 0x85, 0x02,
        0xA9, 0x0C, 0x85, 0x03, 0x20, 0xCF, 0x08, 0xA9,
        0x8E, 0x85, 0x02, 0xA9, 0x0D, 0x85, 0x03, 0x20,
        0xCF, 0x08, 0xA9, 0xAE, 0x85, 0x02, 0xA9, 0x0B,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0xA9, 0x36, 0x85,
        0x02, 0xA9, 0x0E, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0xA9, 0xBA, 0x85, 0x02, 0xA9, 0x0B, 0x85, 0x03,
        0x20, 0xCF, 0x08, 0xA9, 0x3C, 0x85, 0x02, 0xA9,
        0x0E, 0x85, 0x03, 0x20, 0xCF, 0x08, 0x60, 0xA9,
        0x45, 0x85, 0x02, 0xA9, 0x0E, 0x85, 0x03, 0x20,
        0xCF, 0x08, 0xA9, 0xAE, 0x85, 0x02, 0xA9, 0x0B,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0xA9, 0xD4, 0x85,
        0x02, 0xA9, 0x0E, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0xA9, 0xBA, 0x85, 0x02, 0xA9, 0x0B, 0x85, 0x03,
        0x20, 0xCF, 0x08, 0xA9, 0xE3, 0x85, 0x02, 0xA9,
        0x0E, 0x85, 0x03, 0x20, 0xCF, 0x08, 0x60, 0xA9,
        0xE8, 0x85, 0x02, 0xA9, 0x0E, 0x85, 0x03, 0x20,
        0xCF, 0x08, 0xA9, 0xAE, 0x85, 0x02, 0xA9, 0x0B,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0xA9, 0x81, 0x85,
        0x02, 0xA9, 0x0F, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0xA9, 0xBA, 0x85, 0x02, 0xA9, 0x0B, 0x85, 0x03,
        0x20, 0xCF, 0x08, 0xA9, 0x88, 0x85, 0x02, 0xA9,
        0x0F, 0x85, 0x03, 0x20, 0xCF, 0x08, 0x60, 0xA9,
        0x8E, 0x85, 0x02, 0xA9, 0x0F, 0x85, 0x03, 0x20,
        0xCF, 0x08, 0xA9, 0xAE, 0x85, 0x02, 0xA9, 0x0B,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0xA9, 0x1D, 0x85,
        0x02, 0xA9, 0x10, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0xA9, 0xBA, 0x85, 0x02, 0xA9, 0x0B, 0x85, 0x03,
        0x20, 0xCF, 0x08, 0xA9, 0x2A, 0x85, 0x02, 0xA9,
        0x10, 0x85, 0x03, 0x20, 0xCF, 0x08, 0x60, 0xA5,
        0x15, 0x30, 0x0C, 0xA9, 0x9F, 0x85, 0x02, 0xA9,
        0x13, 0x85, 0x03, 0x20, 0xCF, 0x08, 0x60, 0xA9,
        0x35, 0x85, 0x02, 0xA9, 0x10, 0x85, 0x03, 0x20,
        0xCF, 0x08, 0xA9, 0xAE, 0x85, 0x02, 0xA9, 0x0B,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0xA9, 0xA5, 0x85,
        0x02, 0xA9, 0x10, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0xA9, 0xBA, 0x85, 0x02, 0xA9, 0x0B, 0x85, 0x03,
        0x20, 0xCF, 0x08, 0xA9, 0xB0, 0x85, 0x02, 0xA9,
        0x10, 0x85, 0x03, 0x20, 0xCF, 0x08, 0x60, 0xA9,
        0xB3, 0x85, 0x02, 0xA9, 0x10, 0x85, 0x03, 0x20,
        0xCF, 0x08, 0xA9, 0xAE, 0x85, 0x02, 0xA9, 0x0B,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0xA9, 0x2D, 0x85,
        0x02, 0xA9, 0x11, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0xA9, 0xBA, 0x85, 0x02, 0xA9, 0x0B, 0x85, 0x03,
        0x20, 0xCF, 0x08, 0xA9, 0x36, 0x85, 0x02, 0xA9,
        0x11, 0x85, 0x03, 0x20, 0xCF, 0x08, 0x60, 0xA0,
        0xFF, 0xC8, 0xB1, 0x02, 0xC9, 0x25, 0xF0, 0x0A,
        0x09, 0x80, 0xD9, 0x00, 0x02, 0xF0, 0xF2, 0xA9,
        0x00, 0x60, 0xA9, 0xFF, 0x60, 0xC9, 0xDF, 0xF0,
        0x13, 0xC9, 0x9B, 0xF0, 0x03, 0xC8, 0x10, 0x0F,
        0xA9, 0x8D, 0x20, 0xEF, 0xFF, 0xA9, 0x3E, 0x20,
        0xEF, 0xFF, 0xA0, 0x01, 0x88, 0x30, 0xF1, 0xAD,
        0x11, 0xD0, 0x10, 0xFB, 0xAD, 0x10, 0xD0, 0x99,
        0x00, 0x02, 0x20, 0xEF, 0xFF, 0xC9, 0x8D, 0xD0,
        0xD4, 0x60, 0xA0, 0x00, 0xA5, 0x00, 0xC8, 0x20,
        0xEF, 0xFF, 0xC4, 0x01, 0xD0, 0xF8, 0x60, 0xA0,
        0xFF, 0xC8, 0xB1, 0x02, 0xC9, 0x25, 0xF0, 0x12,
        0xC9, 0x26, 0xF0, 0x06, 0x20, 0xEF, 0xFF, 0x4C,
        0xD1, 0x08, 0xA9, 0x8D, 0x20, 0xEF, 0xFF, 0x4C,
        0xD1, 0x08, 0x60, 0xA9, 0x8D, 0x20, 0xEF, 0xFF,
        0x20, 0xEF, 0xFF, 0xA9, 0x08, 0x85, 0x01, 0xA9,
        0xA0, 0x85, 0x00, 0x20, 0xC2, 0x08, 0xA9, 0x71,
        0x85, 0x02, 0xA9, 0x0A, 0x85, 0x03, 0x20, 0xCF,
        0x08, 0xA9, 0x0A, 0x85, 0x01, 0x20, 0xC2, 0x08,
        0xA9, 0x7F, 0x85, 0x02, 0xA9, 0x0A, 0x85, 0x03,
        0x20, 0xCF, 0x08, 0xA9, 0x0C, 0x85, 0x01, 0x20,
        0xC2, 0x08, 0xA9, 0x92, 0x85, 0x02, 0xA9, 0x0A,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0xA9, 0x8D, 0x20,
        0xEF, 0xFF, 0xA9, 0x10, 0x85, 0x01, 0xA9, 0xA0,
        0x85, 0x00, 0x20, 0xC2, 0x08, 0xA9, 0x08, 0x85,
        0x01, 0xA9, 0xC9, 0x85, 0x00, 0x20, 0xC2, 0x08,
        0xA9, 0x8D, 0x20, 0xEF, 0xFF, 0xA9, 0x10, 0x85,
        0x01, 0xA9, 0xA0, 0x85, 0x00, 0x20, 0xC2, 0x08,
        0xA9, 0xC9, 0x20, 0xEF, 0xFF, 0xA9, 0x06, 0x85,
        0x01, 0x20, 0xC2, 0x08, 0xA9, 0xC9, 0x20, 0xEF,
        0xFF, 0xA9, 0x8D, 0x20, 0xEF, 0xFF, 0xA9, 0x10,
        0x85, 0x01, 0xA9, 0xA0, 0x85, 0x00, 0x20, 0xC2,
        0x08, 0xA9, 0xC9, 0x20, 0xEF, 0xFF, 0xA9, 0x06,
        0x85, 0x01, 0x20, 0xC2, 0x08, 0xA9, 0xC9, 0x20,
        0xEF, 0xFF, 0xA9, 0x8D, 0x20, 0xEF, 0xFF, 0xA9,
        0x10, 0x85, 0x01, 0xA9, 0xA0, 0x85, 0x00, 0x20,
        0xC2, 0x08, 0xA9, 0xC9, 0x20, 0xEF, 0xFF, 0xA9,
        0x06, 0x85, 0x01, 0x20, 0xC2, 0x08, 0xA9, 0xC9,
        0x20, 0xEF, 0xFF, 0xA9, 0x8D, 0x20, 0xEF, 0xFF,
        0xA9, 0x10, 0x85, 0x01, 0xA9, 0xA0, 0x85, 0x00,
        0x20, 0xC2, 0x08, 0xA9, 0xC9, 0x20, 0xEF, 0xFF,
        0xA9, 0x02, 0x85, 0x01, 0x20, 0xC2, 0x08, 0xA9,
        0xC9, 0x85, 0x00, 0x20, 0xC2, 0x08, 0xA9, 0xA0,
        0x85, 0x00, 0x20, 0xC2, 0x08, 0xA9, 0xC9, 0x20,
        0xEF, 0xFF, 0xA9, 0x8D, 0x20, 0xEF, 0xFF, 0xA9,
        0x10, 0x85, 0x01, 0xA9, 0xA0, 0x85, 0x00, 0x20,
        0xC2, 0x08, 0xA9, 0xC9, 0x20, 0xEF, 0xFF, 0xA9,
        0x02, 0x85, 0x01, 0x20, 0xC2, 0x08, 0xA9, 0xC9,
        0x85, 0x00, 0x20, 0xC2, 0x08, 0xA9, 0xA0, 0x85,
        0x00, 0x20, 0xC2, 0x08, 0xA9, 0xC9, 0x20, 0xEF,
        0xFF, 0xA9, 0x8D, 0x20, 0xEF, 0xFF, 0xA9, 0x0C,
        0x85, 0x01, 0xA9, 0xA0, 0x85, 0x00, 0x20, 0xC2,
        0x08, 0xA9, 0xC9, 0x85, 0x00, 0xA9, 0x10, 0x85,
        0x01, 0x20, 0xC2, 0x08, 0xA9, 0x8D, 0x20, 0xEF,
        0xFF, 0x20, 0xEF, 0xFF, 0xA9, 0x0C, 0x85, 0x01,
        0xA9, 0xA0, 0x85, 0x00, 0x20, 0xC2, 0x08, 0xA9,
        0xA9, 0x85, 0x02, 0xA9, 0x0A, 0x85, 0x03, 0x20,
        0xCF, 0x08, 0xA9, 0x3E, 0x20, 0xEF, 0xFF, 0xAD,
        0x11, 0xD0, 0x10, 0xFB, 0xAD, 0x10, 0xD0, 0xC9,
        0xB1, 0xF0, 0x12, 0xC9, 0xB2, 0xF0, 0x03, 0x4C,
        0x47, 0x0A, 0xA9, 0xD6, 0x85, 0x02, 0xA9, 0x0A,
        0x85, 0x03, 0x20, 0xCF, 0x08, 0xA9, 0xBC, 0x85,
        0x02, 0xA9, 0x0A, 0x85, 0x03, 0x20, 0xCF, 0x08,
        0x60, 0x4C, 0x49, 0x54, 0x54, 0x4C, 0x45, 0x20,
        0x54, 0x4F, 0x57, 0x45, 0x52, 0x26, 0x25, 0x41,
        0x50, 0x50, 0x4C, 0x45, 0x20, 0x31, 0x20, 0x43,
        0x4F, 0x4F, 0x4C, 0x20, 0x47, 0x41, 0x4D, 0x45,
        0x26, 0x25, 0x57, 0x52, 0x49, 0x54, 0x54, 0x45,
        0x4E, 0x20, 0x42, 0x59, 0x20, 0x41, 0x2E, 0x56,
        0x45, 0x52, 0x48, 0x49, 0x4C, 0x4C, 0x45, 0x26,
        0x25, 0x31, 0x5D, 0x20, 0x50, 0x4C, 0x41, 0x59,
        0x20, 0x20, 0x32, 0x5D, 0x20, 0x48, 0x45, 0x4C,
        0x50, 0x26, 0x26, 0x25, 0x4F, 0x4B, 0x2C, 0x20,
        0x4E, 0x4F, 0x57, 0x20, 0x4C, 0x45, 0x54, 0x27,
        0x53, 0x20, 0x42, 0x45, 0x47, 0x49, 0x4E, 0x20,
        0x2E, 0x2E, 0x2E, 0x26, 0x26, 0x25, 0x54, 0x48,
        0x49, 0x53, 0x20, 0x49, 0x53, 0x20, 0x41, 0x20,
        0x42, 0x41, 0x53, 0x49, 0x43, 0x20, 0x54, 0x58,
        0x54, 0x20, 0x41, 0x44, 0x56, 0x45, 0x4E, 0x54,
        0x55, 0x52, 0x45, 0x2E, 0x26, 0x56, 0x41, 0x4C,
        0x49, 0x44, 0x53, 0x20, 0x43, 0x4F, 0x4D, 0x4D,
        0x41, 0x4E, 0x44, 0x53, 0x20, 0x41, 0x52, 0x45,
        0x3A, 0x26, 0x26, 0x44, 0x49, 0x52, 0x45, 0x43,
        0x54, 0x49, 0x4F, 0x4E, 0x3A, 0x20, 0x4E, 0x2C,
        0x53, 0x2C, 0x57, 0x2C, 0x45, 0x2C, 0x55, 0x50,
        0x2C, 0x44, 0x4F, 0x57, 0x4E, 0x2E, 0x26, 0x41,
        0x43, 0x54, 0x49, 0x4F, 0x4E, 0x3A, 0x20, 0x4C,
        0x4F, 0x4F, 0x4B, 0x2C, 0x45, 0x58, 0x41, 0x4D,
        0x49, 0x4E, 0x45, 0x2C, 0x45, 0x4E, 0x54, 0x45,
        0x52, 0x2C, 0x47, 0x45, 0x54, 0x2C, 0x55, 0x53,
        0x45, 0x2C, 0x53, 0x41, 0x59, 0x2E, 0x26, 0x53,
        0x50, 0x45, 0x43, 0x49, 0x41, 0x4C, 0x3A, 0x20,
        0x49, 0x4E, 0x56, 0x45, 0x4E, 0x54, 0x4F, 0x52,
        0x59, 0x2C, 0x48, 0x45, 0x4C, 0x50, 0x2C, 0x45,
        0x58, 0x49, 0x54, 0x2E, 0x26, 0x4F, 0x42, 0x4A,
        0x45, 0x43, 0x54, 0x3A, 0x20, 0x42, 0x4F, 0x41,
        0x54, 0x2C, 0x44, 0x4F, 0x4F, 0x52, 0x2C, 0x41,
        0x4E, 0x44, 0x20, 0x4D, 0x4F, 0x52, 0x45, 0x2E,
        0x2E, 0x2E, 0x26, 0x26, 0x43, 0x4F, 0x4D, 0x50,
        0x4C, 0x45, 0x58, 0x20, 0x43, 0x4F, 0x4D, 0x4D,
        0x41, 0x4E, 0x44, 0x20, 0x55, 0x53, 0x45, 0x20,
        0x54, 0x57, 0x4F, 0x20, 0x57, 0x4F, 0x52, 0x44,
        0x20, 0x4D, 0x41, 0x58, 0x26, 0x25, 0x4F, 0x42,
        0x4A, 0x45, 0x43, 0x54, 0x28, 0x53, 0x29, 0x3A,
        0x20, 0x25, 0x45, 0x58, 0x49, 0x54, 0x28, 0x53,
        0x29, 0x3A, 0x20, 0x25, 0x48, 0x45, 0x59, 0x2C,
        0x20, 0x42, 0x45, 0x43, 0x41, 0x55, 0x53, 0x45,
        0x20, 0x59, 0x4F, 0x55, 0x20, 0x53, 0x41, 0x59,
        0x20, 0x54, 0x48, 0x41, 0x54, 0x2C, 0x26, 0x59,
        0x4F, 0x55, 0x20, 0x4D, 0x55, 0x53, 0x54, 0x20,
        0x54, 0x59, 0x50, 0x45, 0x20, 0x27, 0x53, 0x4F,
        0x52, 0x52, 0x59, 0x27, 0x20, 0x54, 0x4F, 0x20,
        0x43, 0x4F, 0x4E, 0x54, 0x49, 0x4E, 0x55, 0x45,
        0x2E, 0x26, 0x4F, 0x42, 0x45, 0x59, 0x20, 0x43,
        0x41, 0x4E, 0x20, 0x42, 0x45, 0x20, 0x41, 0x20,
        0x47, 0x4F, 0x4F, 0x44, 0x20, 0x49, 0x44, 0x45,
        0x41, 0x26, 0x25, 0x4F, 0x4B, 0x2C, 0x20, 0x59,
        0x4F, 0x55, 0x27, 0x52, 0x45, 0x20, 0x41, 0x20,
        0x47, 0x4F, 0x4F, 0x44, 0x20, 0x42, 0x4F, 0x59,
        0x20, 0x28, 0x4F, 0x52, 0x20, 0x47, 0x49, 0x52,
        0x4C, 0x29, 0x2C, 0x26, 0x59, 0x4F, 0x55, 0x20,
        0x43, 0x41, 0x4E, 0x20, 0x50, 0x4C, 0x41, 0x59,
        0x20, 0x4E, 0x4F, 0x57, 0x20, 0x2E, 0x2E, 0x2E,
        0x26, 0x25, 0x52, 0x4F, 0x4F, 0x4D, 0x20, 0x50,
        0x4F, 0x53, 0x49, 0x54, 0x49, 0x4F, 0x4E, 0x20,
        0x45, 0x52, 0x52, 0x4F, 0x52, 0x20, 0x3A, 0x2D,
        0x28, 0x28, 0x28, 0x28, 0x28, 0x26, 0x25, 0x59,
        0x4F, 0x55, 0x52, 0x20, 0x42, 0x41, 0x47, 0x20,
        0x43, 0x4F, 0x4E, 0x54, 0x41, 0x49, 0x4E, 0x53,
        0x20, 0x3A, 0x26, 0x25, 0x41, 0x20, 0x4B, 0x45,
        0x59, 0x26, 0x25, 0x41, 0x20, 0x54, 0x4F, 0x52,
        0x43, 0x48, 0x26, 0x25, 0x41, 0x20, 0x53, 0x49,
        0x4C, 0x56, 0x45, 0x52, 0x20, 0x44, 0x41, 0x47,
        0x47, 0x45, 0x52, 0x26, 0x25, 0x4E, 0x4F, 0x54,
        0x48, 0x49, 0x4E, 0x47, 0x26, 0x25, 0x45, 0x58,
        0x49, 0x54, 0x25, 0x48, 0x45, 0x4C, 0x50, 0x25,
        0x4C, 0x4F, 0x4F, 0x4B, 0x25, 0x53, 0x48, 0x49,
        0x54, 0x25, 0x46, 0x55, 0x43, 0x4B, 0x25, 0x53,
        0x4F, 0x52, 0x52, 0x59, 0x25, 0x49, 0x4E, 0x56,
        0x45, 0x4E, 0x54, 0x4F, 0x52, 0x59, 0x25, 0x4E,
        0x25, 0x53, 0x25, 0x57, 0x25, 0x55, 0x50, 0x25,
        0x44, 0x4F, 0x57, 0x4E, 0x25, 0x53, 0x41, 0x59,
        0x20, 0x41, 0x4E, 0x41, 0x45, 0x54, 0x4F, 0x53,
        0x48, 0x25, 0x55, 0x53, 0x45, 0x20, 0x44, 0x41,
        0x47, 0x47, 0x45, 0x52, 0x25, 0x55, 0x53, 0x45,
        0x20, 0x54, 0x4F, 0x52, 0x43, 0x48, 0x25, 0x45,
        0x58, 0x41, 0x4D, 0x49, 0x4E, 0x45, 0x20, 0x44,
        0x45, 0x53, 0x4B, 0x25, 0x45, 0x58, 0x41, 0x4D,
        0x49, 0x4E, 0x45, 0x20, 0x42, 0x4F, 0x4F, 0x4B,
        0x25, 0x45, 0x58, 0x41, 0x4D, 0x49, 0x4E, 0x45,
        0x20, 0x50, 0x49, 0x43, 0x54, 0x55, 0x52, 0x45,
        0x25, 0x45, 0x58, 0x41, 0x4D, 0x49, 0x4E, 0x45,
        0x20, 0x42, 0x45, 0x44, 0x25, 0x45, 0x58, 0x41,
        0x4D, 0x49, 0x4E, 0x45, 0x20, 0x54, 0x4F, 0x52,
        0x43, 0x48, 0x25, 0x45, 0x58, 0x41, 0x4D, 0x49,
        0x4E, 0x45, 0x20, 0x42, 0x4F, 0x41, 0x54, 0x25,
        0x45, 0x58, 0x41, 0x4D, 0x49, 0x4E, 0x45, 0x20,
        0x53, 0x4B, 0x45, 0x4C, 0x45, 0x54, 0x4F, 0x4E,
        0x25, 0x45, 0x58, 0x41, 0x4D, 0x49, 0x4E, 0x45,
        0x20, 0x44, 0x4F, 0x4F, 0x52, 0x25, 0x47, 0x45,
        0x54, 0x20, 0x54, 0x4F, 0x52, 0x43, 0x48, 0x25,
        0x45, 0x4E, 0x54, 0x45, 0x52, 0x25, 0x55, 0x53,
        0x45, 0x20, 0x4B, 0x45, 0x59, 0x25, 0x59, 0x4F,
        0x55, 0x27, 0x52, 0x45, 0x20, 0x49, 0x4E, 0x20,
        0x41, 0x20, 0x44, 0x41, 0x52, 0x4B, 0x20, 0x46,
        0x4F, 0x52, 0x45, 0x53, 0x54, 0x2E, 0x26, 0x45,
        0x4C, 0x55, 0x53, 0x49, 0x56, 0x45, 0x20, 0x53,
        0x48, 0x41, 0x44, 0x4F, 0x57, 0x53, 0x20, 0x41,
        0x52, 0x45, 0x20, 0x46, 0x4C, 0x59, 0x49, 0x4E,
        0x47, 0x20, 0x41, 0x52, 0x4F, 0x55, 0x4E, 0x44,
        0x2E, 0x26, 0x49, 0x4E, 0x20, 0x46, 0x52, 0x4F,
        0x4E, 0x54, 0x20, 0x4F, 0x46, 0x20, 0x59, 0x4F,
        0x55, 0x2C, 0x20, 0x41, 0x20, 0x54, 0x48, 0x52,
        0x45, 0x45, 0x20, 0x46, 0x4C, 0x4F, 0x4F, 0x52,
        0x20, 0x54, 0x4F, 0x57, 0x45, 0x52, 0x26, 0x53,
        0x45, 0x45, 0x4D, 0x53, 0x20, 0x54, 0x4F, 0x20,
        0x42, 0x45, 0x20, 0x57, 0x45, 0x4C, 0x43, 0x4F,
        0x4D, 0x49, 0x4E, 0x47, 0x2E, 0x26, 0x54, 0x4F,
        0x20, 0x54, 0x48, 0x45, 0x20, 0x53, 0x4F, 0x55,
        0x54, 0x48, 0x2C, 0x20, 0x41, 0x20, 0x4C, 0x41,
        0x4B, 0x45, 0x20, 0x44, 0x49, 0x53, 0x41, 0x50,
        0x50, 0x45, 0x41, 0x52, 0x49, 0x4E, 0x47, 0x26,
        0x49, 0x4E, 0x54, 0x4F, 0x20, 0x54, 0x48, 0x45,
        0x20, 0x46, 0x4F, 0x47, 0x26, 0x25, 0x44, 0x4F,
        0x4F, 0x52, 0x26, 0x25, 0x53, 0x2C, 0x45, 0x4E,
        0x54, 0x45, 0x52, 0x26, 0x25, 0x59, 0x4F, 0x55,
        0x27, 0x52, 0x45, 0x20, 0x4F, 0x4E, 0x20, 0x54,
        0x48, 0x45, 0x20, 0x4C, 0x41, 0x4B, 0x45, 0x27,
        0x53, 0x20, 0x42, 0x41, 0x4E, 0x4B, 0x2C, 0x26,
        0x54, 0x48, 0x45, 0x52, 0x45, 0x20, 0x49, 0x53,
        0x20, 0x41, 0x20, 0x53, 0x4B, 0x45, 0x4C, 0x45,
        0x54, 0x4F, 0x4E, 0x20, 0x48, 0x45, 0x52, 0x45,
        0x2C, 0x20, 0x41, 0x4E, 0x44, 0x20, 0x41, 0x4E,
        0x20, 0x4F, 0x4C, 0x44, 0x26, 0x53, 0x4D, 0x41,
        0x4C, 0x4C, 0x20, 0x42, 0x4F, 0x41, 0x54, 0x20,
        0x46, 0x4C, 0x4F, 0x41, 0x54, 0x54, 0x49, 0x4E,
        0x47, 0x20, 0x4F, 0x4E, 0x20, 0x54, 0x48, 0x45,
        0x20, 0x57, 0x41, 0x54, 0x45, 0x52, 0x2E, 0x20,
        0x49, 0x54, 0x26, 0x43, 0x41, 0x4E, 0x20, 0x50,
        0x52, 0x4F, 0x42, 0x41, 0x42, 0x4C, 0x59, 0x20,
        0x54, 0x52, 0x41, 0x4E, 0x53, 0x50, 0x4F, 0x52,
        0x54, 0x20, 0x59, 0x4F, 0x55, 0x20, 0x54, 0x4F,
        0x20, 0x54, 0x48, 0x45, 0x20, 0x53, 0x4F, 0x55,
        0x54, 0x48, 0x26, 0x25, 0x53, 0x4B, 0x45, 0x4C,
        0x45, 0x54, 0x4F, 0x4E, 0x2C, 0x42, 0x4F, 0x41,
        0x54, 0x26, 0x25, 0x4E, 0x2C, 0x53, 0x26, 0x25,
        0x59, 0x4F, 0x55, 0x27, 0x52, 0x45, 0x20, 0x49,
        0x4E, 0x20, 0x41, 0x20, 0x57, 0x4F, 0x52, 0x4B,
        0x53, 0x48, 0x4F, 0x50, 0x2E, 0x20, 0x4C, 0x4F,
        0x54, 0x53, 0x20, 0x4F, 0x46, 0x20, 0x57, 0x4F,
        0x4F, 0x44, 0x27, 0x53, 0x26, 0x50, 0x4C, 0x41,
        0x4E, 0x4B, 0x53, 0x20, 0x41, 0x52, 0x45, 0x20,
        0x52, 0x45, 0x53, 0x54, 0x49, 0x4E, 0x47, 0x20,
        0x4F, 0x4E, 0x20, 0x54, 0x48, 0x45, 0x20, 0x57,
        0x41, 0x4C, 0x4C, 0x53, 0x2E, 0x20, 0x54, 0x48,
        0x45, 0x52, 0x45, 0x26, 0x41, 0x52, 0x45, 0x20,
        0x53, 0x4F, 0x4D, 0x45, 0x20, 0x54, 0x4F, 0x52,
        0x43, 0x48, 0x53, 0x20, 0x4F, 0x4E, 0x20, 0x41,
        0x20, 0x57, 0x4F, 0x52, 0x4B, 0x42, 0x45, 0x4E,
        0x43, 0x48, 0x2C, 0x20, 0x53, 0x54, 0x41, 0x49,
        0x52, 0x53, 0x26, 0x54, 0x4F, 0x20, 0x54, 0x48,
        0x45, 0x20, 0x4E, 0x4F, 0x52, 0x54, 0x48, 0x20,
        0x41, 0x4E, 0x44, 0x20, 0x41, 0x20, 0x44, 0x4F,
        0x4F, 0x52, 0x20, 0x54, 0x4F, 0x20, 0x54, 0x48,
        0x45, 0x20, 0x57, 0x45, 0x53, 0x54, 0x2E, 0x26,
        0x25, 0x54, 0x4F, 0x52, 0x43, 0x48, 0x26, 0x25,
        0x57, 0x2C, 0x55, 0x50, 0x26, 0x25, 0x57, 0x45,
        0x4C, 0x43, 0x4F, 0x4D, 0x45, 0x20, 0x54, 0x4F,
        0x20, 0x54, 0x48, 0x45, 0x20, 0x54, 0x4F, 0x57,
        0x45, 0x52, 0x27, 0x53, 0x20, 0x42, 0x45, 0x44,
        0x52, 0x4F, 0x4F, 0x4D, 0x2E, 0x26, 0x54, 0x48,
        0x45, 0x52, 0x45, 0x20, 0x41, 0x52, 0x45, 0x20,
        0x53, 0x4F, 0x4D, 0x45, 0x20, 0x50, 0x49, 0x43,
        0x54, 0x55, 0x52, 0x45, 0x53, 0x20, 0x4F, 0x4E,
        0x20, 0x54, 0x48, 0x45, 0x20, 0x57, 0x41, 0x4C,
        0x4C, 0x2C, 0x26, 0x42, 0x55, 0x54, 0x20, 0x4E,
        0x4F, 0x54, 0x48, 0x49, 0x4E, 0x47, 0x20, 0x4D,
        0x4F, 0x52, 0x45, 0x20, 0x53, 0x45, 0x45, 0x4D,
        0x53, 0x20, 0x55, 0x53, 0x45, 0x46, 0x55, 0x4C,
        0x20, 0x48, 0x45, 0x52, 0x45, 0x2E, 0x26, 0x4F,
        0x48, 0x2C, 0x20, 0x54, 0x48, 0x45, 0x52, 0x45,
        0x27, 0x53, 0x20, 0x41, 0x20, 0x44, 0x4F, 0x4F,
        0x52, 0x20, 0x4F, 0x4E, 0x20, 0x54, 0x48, 0x45,
        0x20, 0x53, 0x4F, 0x55, 0x54, 0x48, 0x20, 0x54,
        0x4F, 0x4F, 0x2E, 0x26, 0x25, 0x50, 0x49, 0x43,
        0x54, 0x55, 0x52, 0x45, 0x2C, 0x42, 0x45, 0x44,
        0x26, 0x25, 0x55, 0x50, 0x2C, 0x44, 0x4F, 0x57,
        0x4E, 0x2C, 0x53, 0x26, 0x25, 0x49, 0x4E, 0x20,
        0x54, 0x48, 0x49, 0x53, 0x20, 0x52, 0x4F, 0x4F,
        0x4D, 0x2C, 0x20, 0x54, 0x48, 0x45, 0x52, 0x45,
        0x27, 0x53, 0x20, 0x41, 0x20, 0x4C, 0x49, 0x42,
        0x52, 0x41, 0x52, 0x59, 0x20, 0x57, 0x48, 0x45,
        0x52, 0x45, 0x26, 0x48, 0x55, 0x4E, 0x44, 0x52,
        0x45, 0x44, 0x20, 0x4F, 0x46, 0x20, 0x42, 0x4F,
        0x4F, 0x4B, 0x53, 0x20, 0x41, 0x52, 0x45, 0x20,
        0x53, 0x54, 0x4F, 0x52, 0x45, 0x44, 0x2E, 0x26,
        0x41, 0x20, 0x57, 0x4F, 0x4F, 0x44, 0x45, 0x4E,
        0x20, 0x44, 0x45, 0x53, 0x4B, 0x20, 0x41, 0x4E,
        0x44, 0x20, 0x41, 0x20, 0x43, 0x48, 0x41, 0x49,
        0x52, 0x26, 0x41, 0x52, 0x45, 0x20, 0x52, 0x45,
        0x53, 0x54, 0x49, 0x4E, 0x47, 0x20, 0x48, 0x45,
        0x52, 0x45, 0x2E, 0x26, 0x25, 0x44, 0x45, 0x53,
        0x4B, 0x2C, 0x42, 0x4F, 0x4F, 0x4B, 0x26, 0x25,
        0x4E, 0x26, 0x25, 0x54, 0x48, 0x49, 0x53, 0x20,
        0x52, 0x4F, 0x4F, 0x4D, 0x20, 0x49, 0x53, 0x20,
        0x54, 0x4F, 0x54, 0x41, 0x4C, 0x59, 0x20, 0x57,
        0x49, 0x50, 0x45, 0x44, 0x20, 0x4F, 0x55, 0x54,
        0x2C, 0x26, 0x59, 0x4F, 0x55, 0x20, 0x43, 0x41,
        0x4E, 0x20, 0x53, 0x45, 0x45, 0x20, 0x54, 0x48,
        0x45, 0x20, 0x53, 0x54, 0x41, 0x52, 0x53, 0x20,
        0x46, 0x52, 0x4F, 0x4D, 0x20, 0x48, 0x45, 0x52,
        0x45, 0x2E, 0x26, 0x49, 0x4E, 0x20, 0x54, 0x48,
        0x45, 0x20, 0x4D, 0x49, 0x44, 0x44, 0x4C, 0x45,
        0x20, 0x4F, 0x46, 0x20, 0x54, 0x48, 0x45, 0x20,
        0x4D, 0x45, 0x53, 0x53, 0x2C, 0x26, 0x41, 0x20,
        0x44, 0x41, 0x52, 0x4B, 0x20, 0x4D, 0x41, 0x4E,
        0x20, 0x49, 0x53, 0x20, 0x4C, 0x4F, 0x4F, 0x4B,
        0x49, 0x4E, 0x47, 0x20, 0x41, 0x54, 0x20, 0x59,
        0x4F, 0x55, 0x2E, 0x26, 0x25, 0x4E, 0x4F, 0x54,
        0x48, 0x49, 0x4E, 0x47, 0x26, 0x25, 0x44, 0x4F,
        0x57, 0x4E, 0x26, 0x25, 0x54, 0x48, 0x45, 0x20,
        0x44, 0x4F, 0x4F, 0x52, 0x20, 0x49, 0x53, 0x20,
        0x43, 0x4C, 0x4F, 0x53, 0x45, 0x44, 0x26, 0x25,
        0x54, 0x48, 0x45, 0x20, 0x44, 0x4F, 0x4F, 0x52,
        0x20, 0x49, 0x53, 0x20, 0x55, 0x4E, 0x4C, 0x4F,
        0x43, 0x4B, 0x45, 0x44, 0x20, 0x41, 0x4E, 0x44,
        0x20, 0x4F, 0x50, 0x45, 0x4E, 0x2C, 0x26, 0x54,
        0x59, 0x50, 0x45, 0x20, 0x27, 0x45, 0x4E, 0x54,
        0x45, 0x52, 0x27, 0x20, 0x4E, 0x4F, 0x57, 0x26,
        0x25, 0x54, 0x48, 0x45, 0x20, 0x42, 0x4F, 0x41,
        0x54, 0x20, 0x49, 0x53, 0x20, 0x53, 0x49, 0x4E,
        0x4B, 0x49, 0x4E, 0x47, 0x20, 0x21, 0x21, 0x21,
        0x21, 0x26, 0x54, 0x48, 0x41, 0x54, 0x27, 0x53,
        0x20, 0x54, 0x48, 0x45, 0x20, 0x45, 0x4E, 0x44,
        0x2E, 0x26, 0x25, 0x54, 0x48, 0x45, 0x52, 0x45,
        0x20, 0x49, 0x53, 0x20, 0x41, 0x20, 0x4C, 0x49,
        0x54, 0x54, 0x4C, 0x45, 0x20, 0x48, 0x4F, 0x4C,
        0x45, 0x20, 0x49, 0x4E, 0x20, 0x54, 0x48, 0x45,
        0x20, 0x42, 0x4F, 0x41, 0x54, 0x2C, 0x26, 0x47,
        0x4F, 0x4F, 0x44, 0x20, 0x54, 0x4F, 0x20, 0x4B,
        0x4E, 0x4F, 0x57, 0x20, 0x21, 0x26, 0x25, 0x54,
        0x48, 0x45, 0x52, 0x45, 0x20, 0x49, 0x53, 0x20,
        0x41, 0x20, 0x4B, 0x45, 0x59, 0x20, 0x55, 0x4E,
        0x44, 0x45, 0x52, 0x20, 0x54, 0x48, 0x45, 0x20,
        0x53, 0x4B, 0x45, 0x4C, 0x45, 0x54, 0x4F, 0x4E,
        0x26, 0x59, 0x4F, 0x55, 0x20, 0x47, 0x45, 0x54,
        0x20, 0x54, 0x48, 0x45, 0x20, 0x4B, 0x45, 0x59,
        0x20, 0x57, 0x49, 0x54, 0x48, 0x20, 0x59, 0x4F,
        0x55, 0x2E, 0x26, 0x25, 0x4E, 0x4F, 0x20, 0x4B,
        0x45, 0x59, 0x20, 0x49, 0x4E, 0x20, 0x59, 0x4F,
        0x55, 0x52, 0x20, 0x49, 0x4E, 0x56, 0x45, 0x4E,
        0x54, 0x4F, 0x52, 0x59, 0x20, 0x21, 0x21, 0x21,
        0x21, 0x26, 0x25, 0x4F, 0x4B, 0x2C, 0x20, 0x54,
        0x48, 0x45, 0x20, 0x44, 0x4F, 0x4F, 0x52, 0x20,
        0x49, 0x53, 0x20, 0x55, 0x4E, 0x4C, 0x4F, 0x43,
        0x4B, 0x45, 0x44, 0x26, 0x25, 0x47, 0x4F, 0x4F,
        0x44, 0x20, 0x54, 0x4F, 0x52, 0x43, 0x48, 0x20,
        0x46, 0x4F, 0x52, 0x20, 0x47, 0x4F, 0x4F, 0x44,
        0x20, 0x4C, 0x49, 0x47, 0x48, 0x54, 0x20, 0x21,
        0x26, 0x25, 0x4F, 0x4B, 0x2C, 0x20, 0x54, 0x48,
        0x45, 0x20, 0x54, 0x4F, 0x52, 0x43, 0x48, 0x20,
        0x49, 0x53, 0x20, 0x49, 0x4E, 0x20, 0x59, 0x4F,
        0x55, 0x52, 0x20, 0x42, 0x41, 0x47, 0x2E, 0x26,
        0x25, 0x54, 0x48, 0x45, 0x52, 0x45, 0x20, 0x41,
        0x52, 0x45, 0x20, 0x53, 0x4F, 0x4D, 0x45, 0x20,
        0x43, 0x41, 0x42, 0x41, 0x4C, 0x49, 0x53, 0x54,
        0x49, 0x43, 0x53, 0x20, 0x53, 0x49, 0x47, 0x4E,
        0x53, 0x2E, 0x26, 0x4F, 0x4E, 0x45, 0x20, 0x4F,
        0x4E, 0x4C, 0x59, 0x20, 0x43, 0x41, 0x4E, 0x20,
        0x42, 0x45, 0x20, 0x52, 0x45, 0x41, 0x44, 0x20,
        0x3A, 0x26, 0x27, 0x41, 0x4E, 0x41, 0x45, 0x54,
        0x4F, 0x53, 0x48, 0x27, 0x20, 0x49, 0x53, 0x20,
        0x54, 0x48, 0x45, 0x20, 0x57, 0x4F, 0x52, 0x44,
        0x20, 0x57, 0x48, 0x4F, 0x20, 0x43, 0x41, 0x4E,
        0x20, 0x53, 0x41, 0x56, 0x45, 0x26, 0x59, 0x4F,
        0x55, 0x20, 0x46, 0x52, 0x4F, 0x4D, 0x20, 0x50,
        0x41, 0x52, 0x41, 0x4C, 0x59, 0x53, 0x49, 0x53,
        0x2E, 0x26, 0x25, 0x54, 0x48, 0x45, 0x52, 0x45,
        0x27, 0x53, 0x20, 0x4E, 0x4F, 0x54, 0x48, 0x49,
        0x4E, 0x47, 0x20, 0x4F, 0x4E, 0x20, 0x54, 0x48,
        0x45, 0x20, 0x42, 0x45, 0x44, 0x26, 0x41, 0x4E,
        0x44, 0x20, 0x55, 0x4E, 0x44, 0x45, 0x52, 0x20,
        0x54, 0x48, 0x45, 0x20, 0x42, 0x45, 0x44, 0x2E,
        0x26, 0x25, 0x54, 0x48, 0x45, 0x52, 0x45, 0x20,
        0x49, 0x53, 0x20, 0x41, 0x20, 0x53, 0x49, 0x4C,
        0x56, 0x45, 0x52, 0x20, 0x44, 0x41, 0x47, 0x47,
        0x45, 0x52, 0x20, 0x48, 0x45, 0x52, 0x45, 0x26,
        0x59, 0x4F, 0x55, 0x20, 0x47, 0x45, 0x54, 0x20,
        0x54, 0x48, 0x45, 0x20, 0x44, 0x41, 0x47, 0x47,
        0x45, 0x52, 0x20, 0x57, 0x49, 0x54, 0x48, 0x20,
        0x59, 0x4F, 0x55, 0x2E, 0x26, 0x25, 0x4C, 0x4F,
        0x54, 0x53, 0x20, 0x4F, 0x46, 0x20, 0x42, 0x4F,
        0x4F, 0x4B, 0x20, 0x54, 0x41, 0x4C, 0x4B, 0x20,
        0x41, 0x42, 0x4F, 0x55, 0x54, 0x26, 0x56, 0x41,
        0x4D, 0x50, 0x49, 0x52, 0x45, 0x53, 0x20, 0x45,
        0x58, 0x54, 0x45, 0x52, 0x4D, 0x49, 0x4E, 0x41,
        0x54, 0x49, 0x4F, 0x4E, 0x2E, 0x26, 0x25, 0x54,
        0x48, 0x45, 0x52, 0x45, 0x20, 0x49, 0x53, 0x20,
        0x4E, 0x4F, 0x20, 0x4C, 0x49, 0x47, 0x48, 0x54,
        0x20, 0x48, 0x45, 0x52, 0x45, 0x2C, 0x26, 0x41,
        0x50, 0x41, 0x52, 0x54, 0x20, 0x46, 0x52, 0x4F,
        0x4D, 0x20, 0x54, 0x48, 0x45, 0x20, 0x4E, 0x4F,
        0x52, 0x54, 0x48, 0x20, 0x44, 0x4F, 0x4F, 0x52,
        0x2E, 0x26, 0x25, 0x59, 0x45, 0x41, 0x48, 0x48,
        0x2C, 0x20, 0x49, 0x54, 0x20, 0x57, 0x4F, 0x52,
        0x4B, 0x53, 0x20, 0x21, 0x21, 0x21, 0x26, 0x59,
        0x4F, 0x55, 0x20, 0x43, 0x41, 0x4E, 0x20, 0x4D,
        0x4F, 0x56, 0x45, 0x20, 0x4E, 0x4F, 0x57, 0x2E,
        0x26, 0x25, 0x49, 0x54, 0x27, 0x53, 0x20, 0x49,
        0x4D, 0x50, 0x4F, 0x53, 0x53, 0x49, 0x42, 0x4C,
        0x45, 0x2C, 0x20, 0x59, 0x4F, 0x55, 0x20, 0x43,
        0x41, 0x4E, 0x27, 0x54, 0x20, 0x4D, 0x4F, 0x56,
        0x45, 0x20, 0x21, 0x26, 0x25, 0x54, 0x48, 0x45,
        0x20, 0x56, 0x41, 0x4D, 0x50, 0x49, 0x52, 0x45,
        0x20, 0x49, 0x53, 0x20, 0x44, 0x49, 0x53, 0x41,
        0x50, 0x50, 0x45, 0x41, 0x52, 0x49, 0x4E, 0x47,
        0x26, 0x55, 0x4E, 0x44, 0x45, 0x52, 0x20, 0x59,
        0x4F, 0x55, 0x52, 0x20, 0x41, 0x54, 0x54, 0x41,
        0x43, 0x4B, 0x26, 0x43, 0x4F, 0x4E, 0x47, 0x52,
        0x41, 0x54, 0x55, 0x4C, 0x41, 0x54, 0x49, 0x4F,
        0x4E, 0x2C, 0x20, 0x59, 0x4F, 0x55, 0x20, 0x57,
        0x49, 0x4E, 0x20, 0x21, 0x21, 0x26, 0x25, 0x59,
        0x4F, 0x55, 0x20, 0x41, 0x52, 0x45, 0x20, 0x54,
        0x52, 0x59, 0x49, 0x4E, 0x47, 0x20, 0x54, 0x4F,
        0x20, 0x45, 0x53, 0x43, 0x41, 0x50, 0x45, 0x2C,
        0x26, 0x42, 0x55, 0x54, 0x20, 0x59, 0x4F, 0x55,
        0x20, 0x43, 0x41, 0x4E, 0x27, 0x54, 0x20, 0x4D,
        0x4F, 0x56, 0x45, 0x2E, 0x20, 0x54, 0x48, 0x45,
        0x20, 0x56, 0x41, 0x4D, 0x50, 0x49, 0x52, 0x45,
        0x26, 0x49, 0x53, 0x20, 0x53, 0x55, 0x43, 0x4B,
        0x49, 0x4E, 0x47, 0x20, 0x59, 0x4F, 0x55, 0x52,
        0x20, 0x42, 0x4C, 0x4F, 0x4F, 0x44, 0x20, 0x4E,
        0x4F, 0x57, 0x2E, 0x26, 0x54, 0x48, 0x41, 0x54,
        0x27, 0x53, 0x20, 0x54, 0x48, 0x45, 0x20, 0x45,
        0x4E, 0x44, 0x2E, 0x26, 0x25, 0x00
    ]]
};
