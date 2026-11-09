const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
};

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input === true ? "Active" : "Inactive";
  }
};

const formatCoordinate = (
  coordinate: readonly [number, number, string]
): string => {
  const latitude: number = coordinate[0];
  const longitude: number = coordinate[1];
  const locationName: string = coordinate[2];

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const combined: T[] = [];

  for (const singleArray of arrays) {
    for (const item of singleArray) {
      combined.push(item);
    }
  }

  return combined;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  const popularCourses: Course[] = [];

  for (const course of courses) {
    if (course.isPublished === true && course.students >= minStudents) {
      popularCourses.push(course);
    }
  }

  return popularCourses;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const values: T[K][] = [];

  for (const item of items) {
    values.push(item[key]);
  }

  return values;
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject): void => {
    if (age >= 18) {
      setTimeout((): void => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
