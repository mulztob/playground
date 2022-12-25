export class StaticClass {
  private static v = 1;

  public static getV() {
    return StaticClass.v;
  }

  static {
    StaticClass.v = 2;
    console.log("static init");
  }
}
