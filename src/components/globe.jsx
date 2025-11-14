import IconCloud from "./ui/icon-cloud";

const slugs = [
  "python",
  "pytorch",
  "mlflow",
  "opencv",
  "numpy",
  "scipy",
  "scikitlearn",
  "pandas",
  "unrealengine",
  "unity",
  "langchain",
  "cplusplus",
  "latex",
  "blender",
  "ros",
  "git",
  "linux",
  "microsoft",
  "gemini",
  "robot",
  "vscode",
  "pydantic"
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
