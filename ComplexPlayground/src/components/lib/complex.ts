export class Complex {
  public real: number;
  public imag: number;

  constructor(real: number, imag: number) {
    this.real = real;
    this.imag = imag;
  }

  add(other: Complex): Complex {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  subtract(other: Complex): Complex {
    return new Complex(this.real - other.real, this.imag - other.imag);
  }

  multiply(other: Complex): Complex {
    return new Complex(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real
    );
  }

  divide(other: Complex): Complex {
    const denominator = other.real ** 2 + other.imag ** 2;
    if (denominator === 0) throw new Error("Division by zero");
    
    return new Complex(
      (this.real * other.real + this.imag * other.imag) / denominator,
      (this.imag * other.real - this.real * other.imag) / denominator
    );
  }

  magnitude(): number {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  toString(): string {
    if (this.imag === 0) return this.real.toString();
    if (this.real === 0) return `${this.imag}i`;
    return `${this.real} ${this.imag > 0 ? '+' : '-'} ${Math.abs(this.imag)}i`;
  }
}