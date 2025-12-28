export interface Model {
  model_id: string;
  name: string;
  organization: string;
  organization_id: string | null;
  organization_country: string | null;
  params: number | null;
  context: number | null;
  canonical_model_id: string | null;
  release_date: string | null;
  announcement_date: string;
  multimodal: boolean;
  license: string | null;
  knowledge_cutoff: string | null;
  input_price: string | null;
  output_price: string | null;
  throughput: string | null;
  latency: string | null;
  aime_2025_score: number | null;
  hle_score: number | null;
  gpqa_score: number | null;
  swe_bench_verified_score: number | null;
  mmmu_score: number | null;
}
