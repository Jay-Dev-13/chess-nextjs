import {Bishop, King, Knight, Pawn, Queen, Rook} from '../app/components/pieces'

const height = 64;
const width = 64;

export const WHITE_PIECES = {
    KING: () => King(height, width, "white"),
    QUEEN: () => Queen(height, width, "white"),
    KNIGHT: () => Knight(height, width, "white"),
    BISHOP: () => Bishop(height, width, "white"),
    ROOK:  () => Rook(height, width, "white"),
    PAWN: () => Pawn(height, width, "white"),
}

export const BLACK_PIECES = {
    KING: () => King(height, width, "black"),
    QUEEN: () => Queen(height, width, "black"),
    KNIGHT: () => Knight(height, width, "black"),
    BISHOP: () => Bishop(height, width, "black"),
    ROOK:  () => Rook(height, width, "black"),
    PAWN: () => Pawn(height, width, "black"),
}
