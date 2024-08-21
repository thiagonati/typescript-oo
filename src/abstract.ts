abstract class Person {
  protected abstract score: number;

  constructor(protected name: string) {}

  public setScore(score: number): void {
    if (score < 0 || score > 900) {
      throw new Error("Score must be between 0 and 900");
    }

    this.score = score;
  }

  public abstract calcScore(): number;
}

class Student extends Person {
  protected score: number;

  constructor(name: string, score: number) {
    super(name);
    this.score = score;
  }
  public calcScore(): number {
    return 800;
  }
}

class Teacher extends Person {
  protected score: number;

  constructor(name: string, score: number) {
    super(name);
    this.score = score;
  }
  public calcScore(): number {
    return 900;
  }
}
